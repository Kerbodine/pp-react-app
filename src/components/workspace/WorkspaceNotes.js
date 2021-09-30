import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import TagList from "../notes/TagList";

export default function WorkspaceNotes({
  allLists,
  currentListIndex,
  updateTagHandler,
  editorLoading,
  editorRef,
  setEditorLoading,
  darkMode,
  handleUpdate,
}) {
  return (
    <div className="w-full h-full px-8">
      <div className="flex">
        <div className="flex-auto">
          <TagList
            tags={allLists[currentListIndex].tags}
            updateTagHandler={updateTagHandler}
            key={currentListIndex}
          />
        </div>
      </div>
      <div className="w-full mt-4 h-[calc(100%-206px)] rounded-2xl overflow-hidden">
        {editorLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <BiLoaderAlt className="text-4xl text-black dark:text-white animate-spin" />
          </div>
        ) : null}
        <Editor
          onInit={(evt, editor) => {
            // editorRef.current = editor;
            setEditorLoading(false);
          }}
          key={[darkMode, currentListIndex]}
          id="tinymce-editor"
          onEditorChange={handleUpdate}
          initialValue={allLists[currentListIndex].content}
          apiKey="9jz5ulzyll0jkomjnscn6f2rm725w3kuuu6eoay5e974vhm7"
          init={{
            skin_url: darkMode ? "/oxide-dark" : "/oxide",
            content_css: darkMode
              ? "/dark-mode-content.css"
              : "./light-mode-content.css",
            height: "100%",
            menubar: false,
            resize: false,
            plugins: [
              "advlist autolink lists link charmap print preview anchor",
              "searchreplace visualblocks code fullscreen preview emoticons print",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | styleselect | bold italic | numlist bullist | alignleft aligncenter alignright alignjustify | outdent indent | link emoticons | code | fullscreen print",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
    </div>
  );
}
