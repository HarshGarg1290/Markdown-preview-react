import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import MarkdownToolbar from './MarkdownToolbar';
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  const handleInsert = (value) => {
    const textarea = document.querySelector('.input');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newValue = markdown.slice(0, start) + value + markdown.slice(end);
    setMarkdown(newValue);
    textarea.focus();
    textarea.setSelectionRange(start + value.length, start + value.length);
  };


  return (
    <main>
      <h1 className="mint"> ENTER THE MARKDOWN TEXT</h1>
      <MarkdownToolbar onInsert={handleInsert} />
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
