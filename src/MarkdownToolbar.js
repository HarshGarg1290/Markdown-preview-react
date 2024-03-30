import React from 'react';
import downloadIcon from './download.png';
import "./MarkdownToolbar.css";
const MarkdownToolbar = ({ onInsert, onDownload}) => {
  const handleInsert = (value) => {
    onInsert(value);
  };
  
  const handleDownload = () => {
    onDownload();
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
      <button className="button-55" onClick={handleDownload}>
        <img className="img" src={downloadIcon} alt="download-output" />
      </button>
    </div>
  );
};

export default MarkdownToolbar;