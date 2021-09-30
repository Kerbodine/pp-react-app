import { Editor } from "@tinymce/tinymce-react";
import React, { useContext, useEffect, useState } from "react";
import {
  BiCalendarExclamation,
  BiLoaderAlt,
  BiStar,
  BiSun,
} from "react-icons/bi";
import ReactTooltip from "react-tooltip";
import TagList from "../notes/TagList";
import settingsContext from "../settings/SettingsContext";

export default function WorkspaceNotes({
  currentItem,
  updateTagHandler,
  editorRef,
  handleUpdate,
  editorLoading,
  setEditorLoading,
  updateComponent,
}) {
  const { data } = useContext(settingsContext);

  let darkMode = data.darkMode;

  const [today, setToday] = useState(currentItem.today);
  const [important, setImportant] = useState(currentItem.important);
  const [starred, setStarred] = useState(currentItem.starred);
  const [pinned, setPinned] = useState(currentItem.pinned);

  useEffect(() => {
    updateComponent({
      type: "notes",
      id: currentItem.id,
      icon: currentItem.icon,
      title: currentItem.title,
      color: currentItem.color,
      creationDate: currentItem.creationDate,
      content: currentItem.content,
      tags: currentItem.tags,
      today: today,
      important: important,
      starred: starred,
      pinned: pinned,
    });
  }, [today, important, starred, pinned]);

  return (
    <div className="w-full h-full px-8">
      <div className="flex">
        <TagList
          tags={currentItem.tags}
          updateTagHandler={updateTagHandler}
          key={currentItem}
        />
        <div className="flex">
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-l-md bg-primary-200 dark:bg-primary-700 dark:text-white text-black text-2xl ${
              today ? "!bg-blue-400 text-white" : ""
            }`}
            onClick={() => {
              setToday(!today);
            }}
            data-tip
            data-for="today"
          >
            <BiSun />
          </button>
          <ReactTooltip
            id="today"
            effect="solid"
            place="bottom"
            backgroundColor="#4b5563"
          >
            Add to today
          </ReactTooltip>
          <button
            className={`w-8 h-8 flex items-center justify-center bg-primary-200 dark:bg-primary-700 dark:text-white text-black text-2xl ${
              important ? "!bg-red-400 text-white" : ""
            }`}
            onClick={() => {
              setImportant(!important);
            }}
            data-tip
            data-for="priority"
          >
            <BiCalendarExclamation />
          </button>
          <ReactTooltip
            id="priority"
            effect="solid"
            place="bottom"
            backgroundColor="#4b5563"
          >
            Add to priority
          </ReactTooltip>
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-r-md bg-primary-200 dark:bg-primary-700 dark:text-white text-black text-2xl ${
              starred ? "!bg-amber-400 text-white" : ""
            }`}
            onClick={() => {
              setStarred(!starred);
            }}
            title="Add to starred"
            data-tip
            data-for="starred"
          >
            <BiStar />
          </button>
          <ReactTooltip
            id="starred"
            effect="solid"
            place="bottom"
            backgroundColor="#4b5563"
          >
            Add to starred
          </ReactTooltip>
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
            editorRef.current = editor;
            setEditorLoading(false);
          }}
          key={[darkMode, currentItem]}
          id="tinymce-editor"
          onEditorChange={handleUpdate}
          initialValue={currentItem.content}
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
