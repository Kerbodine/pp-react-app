import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

import bold from "./icons/bold.svg"
import italic from "./icons/italic.svg"
import underline from "./icons/underline.svg"
import strikethrough from "./icons/strikethrough.svg"
import monospace from "./icons/monospace.svg"
import superscript from "./icons/superscript.svg"
import subscript from "./icons/subscript.svg"
import unordered from "./icons/unordered.svg"
import ordered from "./icons/ordered.svg"
import indent from "./icons/indent.svg"
import outdent from "./icons/outdent.svg"
import left from "./icons/left.svg"
import center from "./icons/center.svg"
import right from "./icons/right.svg"
import justify from "./icons/justify.svg"
import dropper from "./icons/dropper.svg"
import link from "./icons/link.svg"
import unlink from "./icons/unlink.svg"
import emoji from "./icons/emoji.svg"
import embed from "./icons/embed.svg"
import image from "./icons/image.svg"
import eraser from "./icons/eraser.svg"
import undo from "./icons/undo.svg"
import redo from "./icons/redo.svg"

export default function CustomEditor({ editorState, onEditorStateChange }) {

  return (
    <div className="h-full">
      <Editor
        toolbarClassName={`demo-toolbar-custom sticky top-0 z-10`}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor-custom bg-white"
        placeholder="Enter text here..."
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: {
            bold: { icon: bold, className: "editor-button" },
            italic: { icon: italic, className: "editor-button" },
            underline: { icon: underline, className: "editor-button" },
            strikethrough: { icon: strikethrough, className: "editor-button" },
            monospace: { icon: monospace, className: "editor-button" },
            superscript: { icon: superscript, className: "editor-button" },
            subscript: { icon: subscript, className: "editor-button" },
          },
          blockType: { options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'], 
          // options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
          className: 'editor-button-wide', dropdownClassName: 'editor-dropdown-margin' },
          fontSize: { className: 'editor-button-medium', dropdownClassName: 'editor-dropdown-margin'},
          fontFamily: { className: 'editor-button-wide', dropdownClassName: 'editor-dropdown-margin' },
          list: {
            unordered: { icon: unordered, className: "editor-button" },
            ordered: { icon: ordered, className: "editor-button" },
            indent: { icon: indent, className: "editor-button" },
            outdent: { icon: outdent, className: "editor-button" },
          },
          textAlign: {
            left: { icon: left, className: "editor-button" },
            center: { icon: center, className: "editor-button" },
            right: { icon: right, className: "editor-button" },
            justify: { icon: justify, className: "editor-button" },
          },
          colorPicker: { icon: dropper, className: 'editor-button', popupClassName: 'editor-dropdown' },
          link: {
            popupClassName: 'demo-popup-custom',
            link: { icon: link, className: 'editor-button' },
            unlink: { icon: unlink, className: 'editor-button' },
          },
          emoji: { icon: emoji, className: 'editor-button', popupClassName: 'editor-dropdown-emoji' },
          embedded: { icon: embed, className: 'editor-button', popupClassName: 'editor-dropdown' },
          image: { icon: image, className: 'editor-button', popupClassName: 'editor-dropdown' },
          remove: { icon: eraser, className: 'editor-button' },
          history: {
            undo: { icon: undo, className: 'editor-button' },
            redo: { icon: redo, className: 'editor-button' },
          },
        }}
      />
    </div>
  )
};
