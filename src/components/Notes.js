import React from 'react'
import TextEditor from './TextEditor'

export default function Notes() {
  return (
    <div>
      <h1>Notes Page</h1>
      <div className="editor">
        <TextEditor />
      </div>
    </div>
  )
}
