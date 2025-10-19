"use client";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import { useEffect, useState } from "react";
import Documents from "../components/Documents";
import PreviewRenderer from "../components/PreviewRenderer";



export default function TailwindGrapes() {
  const [exported, setExported] = useState<{ html: string; css: string } | null>(null);

  useEffect(() => {
    if (exported) return;
    const editor = grapesjs.init({
      container: "#gjs",
      height: "100vh",
      width: "auto",
      storageManager: false,
      fromElement: true,
      canvas: {
        styles: [],
        scripts: [],
      },
    });

    // Command to export HTML + CSS as a downloadable HTML files
    //     editor.Commands.add("export-html", {
    //       run() {
    //         const html = editor.getHtml();
    //         const css = editor.getCss();

    //         const fullHtml = `
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <meta charset="UTF-8" />
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //   <title>GrapesJS Export</title>
    //   <style>${css}</style>
    //   <script src="https://cdn.tailwindcss.com"></script>
    // </head>
    // <body>
    //   ${html}
    // </body>
    // </html>
    // 		`;

    //         const blob = new Blob([fullHtml], { type: "text/html" });
    //         const link = document.createElement("a");
    //         link.href = URL.createObjectURL(blob);
    //         link.download = "design.html";
    //         link.click();
    //       },
    //     });

    // Command to send HTML/CSS to preview
    editor.Commands.add("send-to-preview", {
      run() {
        const html = editor.getHtml();
        const css = editor.getCss() ?? "";
        setExported({ html, css });
      },
    });




    // Add buttons in GrapesJS panel
    editor.Panels.addButton("options", [
      {
        id: "preview-pdf-btn",
        className: "fa fa-file-pdf-o",
        command: "send-to-preview",
        attributes: { title: "Preview & Download PDF" },
      },
    ]);

    // Inject Tailwind CDN into GrapesJS iframe
    editor.on("canvas:frame:load", () => {
      const frameDoc = editor.Canvas.getDocument();
      if (!frameDoc) return;

      const cfg = frameDoc.createElement("script");
      cfg.textContent = `tailwind.config = { corePlugins: { preflight: false } }`;
      frameDoc.head.appendChild(cfg);

      const tw = frameDoc.createElement("script");
      tw.src = "https://cdn.tailwindcss.com";
      frameDoc.head.appendChild(tw);
    });
  }, [exported]);



  if (exported) {
    return (
      <PreviewRenderer html={exported.html} css={exported.css} onBack={() => setExported(null)} />
    );
  }

  return (
    <div id="gjs">

      <Documents />


    </div>
  );
}
