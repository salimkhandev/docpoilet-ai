import chromium from "@sparticuz/chromium";
import puppeteer, { type Browser } from "puppeteer";
import puppeteerCore, { type Browser as BrowserCore } from "puppeteer-core";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

type RenderPayload = {
    html: string;
    css?: string;
};

function buildHtmlDocument(html: string, css?: string): string {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script>try{window.tailwind={}}catch{}</script>
    <script>tailwind.config = { corePlugins: { preflight: false } };</script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      /* Ensure clean PDF canvas */
      @page { size: A4; margin: 0; }
      html, body { margin: 0; padding: 12px 0 12px 0; background: #ffffff; color: #111827; }
      /* Optional base font defaults to sans-serif if Geist not available */
      body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"; }
    </style>
    ${css ? `<style>${css}</style>` : ""}
  </head>
  <body>
    <div id="root" class="preview-scope">${html}</div>
  </body>
</html>`;
}

export async function POST(req: Request) {
    try {
        const payload = (await req.json()) as RenderPayload;
        const { html, css } = payload || {};
        if (!html || typeof html !== "string") {
            return new Response(JSON.stringify({ error: "Missing 'html' in body" }), {
                status: 400,
                headers: { "content-type": "application/json" },
            });
        }

        // Prefer a system Chrome if provided (helps on environments where Chromium isn't downloaded yet)
        let browser: Browser | BrowserCore;
        if (process.env.NODE_ENV === "production" || process.env.VERCEL_ENV === "production") {
            const executablePath = await chromium.executablePath();
            const args = [
                ...chromium.args,
                "--disable-dev-shm-usage",
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--no-zygote",
                "--single-process",
            ];
            browser = await puppeteerCore.launch({
                executablePath,
                args,
                headless: chromium.headless,
                defaultViewport: chromium.defaultViewport,
            });
        } else {
            const executablePath =
                process.env.PUPPETEER_EXECUTABLE_PATH || process.env.CHROME_PATH || undefined;
            browser = await puppeteer.launch({
                headless: true,
                args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
                executablePath,
            });
        }
        const page = await browser.newPage();
        await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });
        await page.setContent(buildHtmlDocument(html, css), { waitUntil: "networkidle0" });

        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: { top: "12px", right: "0", bottom: "12px", left: "0" },
        });

        await page.close();
        await browser.close();

        const arrayBuffer = pdfBuffer.buffer.slice(pdfBuffer.byteOffset, pdfBuffer.byteOffset + pdfBuffer.byteLength);
        return new Response(arrayBuffer as unknown as BodyInit, {
            status: 200,
            headers: {
                "content-type": "application/pdf",
                "content-disposition": "attachment; filename=design.pdf",
                "cache-control": "no-store",
            },
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("render-pdf failed", message);
        return new Response(JSON.stringify({ error: "Failed to render PDF", message }), {
            status: 500,
            headers: { "content-type": "application/json" },
        });
    }
}


