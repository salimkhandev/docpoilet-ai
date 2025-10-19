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
      fromElement: false,
      canvas: {
        styles: [],
        scripts: ['https://cdn.tailwindcss.com'],
      },
    });

    // Get the Documents component HTML and set it as initial content
    const documentsContainer = document.getElementById('documents-content');
    if (documentsContainer) {
      editor.setComponents(documentsContainer.innerHTML);
    }

    // Inject Tailwind config before Tailwind executes
    editor.on("canvas:frame:load", () => {
      const frameDoc = editor.Canvas.getDocument();
      if (!frameDoc) return;

      const cfg = frameDoc.createElement("script");
      cfg.textContent = `tailwind.config = { corePlugins: { preflight: false } }`;
      frameDoc.head.insertBefore(cfg, frameDoc.head.firstChild);
    });

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

    return () => {
      editor.destroy();
    };
  }, [exported]);

  if (exported) {
    return (
      <PreviewRenderer html={exported.html} css={exported.css} onBack={() => setExported(null)} />
    );
  }

  return (
    <>
      {/* Hidden container to hold Documents content */}
      <div id="documents-content" style={{ display: 'none' }}>
        <Documents />
      </div>
      <div id="gjs"></div>
    </>
  );
}