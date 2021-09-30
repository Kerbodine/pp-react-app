import { BiFile } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

export const notesData = [
  {
    id: uuidv4(),
    icon: <BiFile />,
    title: "Note 1",
    color: "red",
    content: "<h3>Notepad 1 default value</h3>",
    tags: [],
    readOnly: false,
  },
  {
    id: uuidv4(),
    icon: <BiFile />,
    title: "Note 2",
    color: "amber",
    content: "<h3>Notepad 2 default value</h3>",
    tags: [],
    readOnly: false,
  },
  {
    id: uuidv4(),
    icon: <BiFile />,
    title: "Note 3",
    color: "blue",
    content: "<h3>Notepad 3 default value</h3>",
    tags: [],
    readOnly: false,
  },
];
