import React, { Component } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToMarkdown from 'draftjs-to-markdown';
import draftToHtml from "draftjs-to-html";

import { BiUpArrowCircle, BiTrash, BiCodeCurly } from "react-icons/bi";
import { AiFillHtml5, AiFillFileMarkdown } from "react-icons/ai";

import Dropdown from "./ui/Dropdown";

export default class TextEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  htmlDownloadHandler() {
    const documentTitle = document.getElementById("document-title");
    const textarea = document.getElementById("html-download");
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${documentTitle.value ? documentTitle.value : "Untitled"}</title>
</head>
<body style="margin: 2rem; font-family: 'Arial';">
  <div style="background-color: #F3F4F6; padding: 2rem;">
    <h1>${documentTitle.value ? documentTitle.value : "Untitled"}</h1>
    <hr>
    ${textarea.value}
  </div>
</body>
</html>`
    ));
    element.setAttribute('download', `${documentTitle.value}.htm`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  mdDownloadHandler(editorState) {
    const documentTitle = document.getElementById("document-title");
    const textarea = document.getElementById("md-download");
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`${documentTitle.value}\n
${textarea.value}
    `));
    element.setAttribute('download', `${documentTitle.value}.md`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  jsonDownloadHandler() {
    
  }

  allItems = [
    {
      key: "item1",
      icon: <AiFillHtml5 />,
      title: "HTML",
      func: this.htmlDownloadHandler,
    },
    {
      key: "item2",
      icon: <AiFillFileMarkdown />,
      title: "Markdown",
      func: this.mdDownloadHandler,
    },
    {
      key: "item3",
      icon: <BiCodeCurly />,
      title: "JSON",
      func: this.jsonDownloadHandler,
    },
  ]

  render() {
    const { editorState } = this.state;
    return (
      <div className="flex flex-col">
        <div className="flex-auto">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            placeholder="Enter text here..."
          />
        </div>
        <textarea 
          id="html-download"
          className="hidden"
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea>
        <textarea 
          id="md-download"
          className="hidden"
          value={draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
        ></textarea>
        <hr className="w-full mb-2 h-0.5 bg-primary-200"></hr>
        <div className="flex ml-auto h-auto flex-wrap gap-2">
          <Dropdown title="Download" allItems={this.allItems}/>
          <button className="bg-primary-300 p-2 h-10 rounded text-2xl hover:bg-accent-400 hover:text-white transition-colors"><BiUpArrowCircle /></button>
          <button className="bg-primary-300 p-2 h-10 rounded text-2xl hover:bg-red-400 hover:text-white transition-colors"><BiTrash /></button>
        </div>
      </div>
    );
  }
}
