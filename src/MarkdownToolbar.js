import React from 'react';
import "./MarkdownToolbar.css";
const MarkdownToolbar = ({ onInsert }) => {
  const handleInsert = (value) => {
    onInsert(value);
  };

  return (
    <div className="markdown-toolbar">
      <button className="button-55" onClick={() => handleInsert('# ')}>Heading 1</button>
      <button className="button-55" onClick={() => handleInsert('## ')}>Heading 2</button>
      <button className="button-55" onClick={() => handleInsert('### ')}>Heading 3</button>
      <button className="button-55" onClick={() => handleInsert('**')}>Bold</button>
      <button className="button-55" onClick={() => handleInsert('*')}>Italic</button>
      <button className="button-55" onClick={() => handleInsert('- ')}>List Item</button>
      <button className="button-55" onClick={() => handleInsert('`')}>Code</button>
      <button className="button-55" onClick={() => handleInsert('> ')}>Quote</button>
      <button className="button-55" onClick={() => handleInsert('![](http://)')}>Image</button>
      <button className="button-55" onClick={() => handleInsert('[](http://')}>Link</button>
    </div>
  );
};

export default MarkdownToolbar;