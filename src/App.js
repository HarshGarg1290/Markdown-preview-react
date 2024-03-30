import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import MarkdownToolbar from './MarkdownToolbar';
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  const renderedMarkdownRef = useRef(null);

  const handleInsert = (value) => {
    const textarea = document.querySelector('.input');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newValue = markdown.slice(0, start) + value + markdown.slice(end);
    setMarkdown(newValue);
    textarea.focus();
    textarea.setSelectionRange(start + value.length, start + value.length);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const renderedHTML = renderedMarkdownRef.current.innerHTML;
    const file = new Blob([renderedHTML], { type: "text/html;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "output.html";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <main>
      <h1 className="mint"> ENTER THE MARKDOWN TEXT</h1>
      <MarkdownToolbar onInsert={handleInsert} onDownload={handleDownload} />
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result" ref={renderedMarkdownRef}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;