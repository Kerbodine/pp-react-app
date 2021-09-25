import { BiFile } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

export const notesData = [
  {
    id: uuidv4(),
    icon: <BiFile />,
    title: "Note 1",
    color: "red",
    content: "<h1>Notepad1 default value</h1>",
    tags: [],
    readOnly: false,
  },
  {
    id: uuidv4(),
    icon: <BiFile />,
    title: "Note 2",
    color: "amber",
    content: "",
    tags: [],
    readOnly: false,
  },
  {
    id: uuidv4(),
    icon: <BiFile />,
    title: "Note 3",
    color: "blue",
    content: "",
    tags: [],
    readOnly: false,
  },
];
