import React, { useState, useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';
import Editor from "./Editor";

export default function Home({setProgress}) {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>`)
    }, 400)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  useEffect(() => {
    setProgress(10);
    setProgress(100);
  }, [setProgress])

  return (
    <div>
        <div className="pen pen-top">
          <Editor language="xml" displayName="HTML" onChange={setHtml} value={html} ></Editor>
          <Editor language="css" displayName="CSS" onChange={setCss} value={css} ></Editor>
          <Editor language="javascript" displayName="JS" onChange={setJs} value={js} ></Editor>
        </div>

        <div className="pen pen-exc">   {/* Execution area */}
          <iframe
            srcDoc={srcDoc}
            title="editor"
            width="100%"
            height="100%"
            sandbox="allow-scripts"
          />
        </div>
    </div>
  )
}
