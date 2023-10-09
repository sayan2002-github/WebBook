import React, { useState, useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';
import Editor from "./Editor";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Home({ setProgress }) {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  const [expDoc, setExpDoc] = useState('');
  let fileHandle;

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

  useEffect(() => {
    setExpDoc(`
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>${css}</style>
          <title>Document</title>
      </head>
      <body>
          ${html}
          <script>${js}</script>
      </body>
      </html>`
    )
  }, [html, css, js, expDoc]);

  async function save() {
    let stream = await fileHandle.createWritable();
    await stream.write(expDoc);
    await stream.close();
  }

  async function saveAs() {
    try {
      setProgress(10);
      fileHandle = await window.showSaveFilePicker();
      save();
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error(err.name, err.message);
        return;
      }
    }
    setProgress(100);
  }

  return (
    <div>
      <div className="pen pen-top">
        <Editor language="xml" displayName="HTML" onChange={setHtml} value={html} ></Editor>
        <Editor language="css" displayName="CSS" onChange={setCss} value={css} ></Editor>
        <Editor language="javascript" displayName="JS" onChange={setJs} value={js} ></Editor>
      </div>

      <div className='export-btn d-flex justify-content-end'>
        <OverlayTrigger
          delay={{ hide: 450, show: 300 }}
          overlay={(props) => (
            <Tooltip {...props}>
              Export as HTML file
            </Tooltip>
          )}
          placement="bottom"
        ><button className='btn btn-success' onClick={saveAs}><FontAwesomeIcon icon={faDownload} /></button>
        </OverlayTrigger>
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
