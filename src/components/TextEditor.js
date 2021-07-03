import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import { BiDownArrowCircle, BiUpArrowCircle, BiTrash } from "react-icons/bi";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {

  downloadHandler() {

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
<body style="font-family: 'Arial'; margin: 40px;">
  <h1>${documentTitle.value ? documentTitle.value : "Untitled"}</h1>
  <hr>
  <p>${textarea.value}</p>
</body>
</html>`
    ));
    element.setAttribute('download', "data.html");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
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
          disabled
          id="html-download"
          className="w-32 absolute bottom-0 h-24 mb-12 bg-primary-300 hidden"
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea>
        <div className="flex ml-auto">
          <button onClick={this.downloadHandler} className="bg-primary-300 p-2 rounded w-min mr-2 text-2xl hover:bg-primary-200"><BiDownArrowCircle /></button>
          <button className="bg-primary-300 p-2 rounded w-min	mr-2 text-2xl hover:bg-primary-200"><BiUpArrowCircle /></button>
          <button className="bg-primary-300 p-2 rounded w-min	mr-2 text-2xl hover:bg-primary-200"><BiTrash /></button>
        </div>
      </div>
    );
  }
}
