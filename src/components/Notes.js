import React from 'react'
import TextEditor from './TextEditor'

export default function Notes() {
  return (
    <div>
      <h1>Notes Page</h1>
      <div className="editor" style={{ marginLeft: "100px", marginRight: "100px"}}>
        <TextEditor />
      </div>
    </div>
  )
}
