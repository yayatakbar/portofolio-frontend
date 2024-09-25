import React, { useEffect } from 'react';
import 'prismjs/themes/prism-tomorrow.css'; // Tema Prism.js
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'; // Plugin nomor baris
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers'; // Plugin nomor baris
import 'prismjs/components/prism-java'; // Penyorotan sintaks Java

const CodeEditor = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll(); // Highlight syntax setelah komponen dirender
  }, [code]);

  return (
    <div className="code-editor">
      <pre className="line-numbers">
        <code className="language-java">{code}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;
