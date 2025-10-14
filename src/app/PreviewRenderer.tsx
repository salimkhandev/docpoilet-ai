import { useCallback, useMemo, useRef } from "react";

type PreviewRendererProps = {
    html: string;
    css: string;
    onBack: () => void;
};

export default function PreviewRenderer({ html, css, onBack }: PreviewRendererProps) {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const handleDownloadPdf = useCallback(async () => {
        const element = targetRef.current;
        if (!element) return;

        const html = element.innerHTML;
        const res = await fetch("/api/render-pdf", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ html, css }),
        });
        if (!res.ok) return;
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "design.pdf";
        a.click();
        URL.revokeObjectURL(url);
    }, [css]);

    // Memoize the content to avoid re-calculations
    const content = useMemo(() => ({ __html: html }), [html]);

    return (
        <div className="min-h-screen">
            <div className="p-4 flex gap-2">
                <button
                    onClick={onBack}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    Back to editor
                </button>
                <button
                    onClick={handleDownloadPdf}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    Download PDF
                </button>
            </div>

            <div
                ref={targetRef}
                className="preview-scope m-0 p-0 bg-white"
                style={{ backgroundColor: "#ffffff", color: "#111827", margin: 0, padding: 0, paddingBottom: "12pt" }}
            >
                <style>{`
                  /* Force hex/RGB colors for html2canvas compatibility */
                  .preview-scope { color: #111827; background-color: #ffffff; margin: 0; padding: 0; padding-bottom: 12pt; }
                  .preview-scope .bg-white { background-color: #ffffff !important; }
                  .preview-scope .bg-gray-100 { background-color: #f3f4f6 !important; }
                  .preview-scope .text-gray-800 { color: #1f2937 !important; }
                  .preview-scope .text-gray-600 { color: #4b5563 !important; }
                  .preview-scope .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
                  .preview-scope .text-green-500 { color: #22c55e !important; }
                  .preview-scope .border-green-500 { border-color: #22c55e !important; }
                  .preview-scope .shadow { box-shadow: none !important; }
                `}</style>
                <style>{css}</style>
                <div dangerouslySetInnerHTML={content} />
                <div aria-hidden="true" style={{ height: "6pt" }} />
            </div>
        </div>
    );
}


