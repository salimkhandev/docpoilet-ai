import PDFDocument from "pdfkit";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RenderPayload = {
    html: string;
    css?: string;
    title?: string;
};

export async function POST(req: Request) {
    try {
        const payload = (await req.json()) as RenderPayload;
        const { html, title = "Document" } = payload || {};
        
        if (!html || typeof html !== "string") {
            return NextResponse.json({ error: "Missing 'html' in body" }, { status: 400 });
        }

        // Create a new PDF document
        const doc = new PDFDocument({
            size: 'A4',
            margins: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50
            }
        });

        // Collect PDF data
        const chunks: Buffer[] = [];
        doc.on('data', (chunk) => chunks.push(chunk));
        
        // Wait for PDF to be generated
        const pdfPromise = new Promise<Buffer>((resolve, reject) => {
            doc.on('end', () => {
                resolve(Buffer.concat(chunks));
            });
            doc.on('error', reject);
        });

        // Add content to PDF
        doc.fontSize(20).text(title, { align: 'center' });
        doc.moveDown(2);
        
        // Simple HTML to text conversion (you might want to use a proper HTML parser)
        const textContent = html
            .replace(/<[^>]*>/g, ' ') // Remove HTML tags
            .replace(/\s+/g, ' ') // Replace multiple spaces with single space
            .trim();

        doc.fontSize(12).text(textContent, {
            align: 'left',
            lineGap: 5
        });

        // Finalize the PDF
        doc.end();

        // Wait for PDF generation to complete
        const pdfBuffer = await pdfPromise;

        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                "content-type": "application/pdf",
                "content-disposition": "attachment; filename=document.pdf",
                "cache-control": "no-store",
            },
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("render-pdf failed", message);
        return NextResponse.json({ error: "Failed to render PDF", message }, { status: 500 });
    }
}


