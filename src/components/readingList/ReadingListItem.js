import React, { useContext } from "react";
import settingsContext from "../settings/SettingsContext";

export default function ReadingListItem({
  index,
  icon,
  title,
  color,
  amount,
  selectList,
}) {
  const { data } = useContext(settingsContext);
  let show;

  switch (index) {
    case 0:
      data.readingProgress ? (show = true) : (show = false);
      break;
    case 1:
      data.readingComplete ? (show = true) : (show = false);
      break;
    case 2:
      data.readingType ? (show = true) : (show = false);
      break;
    case 3:
      data.readingFavorite ? (show = true) : (show = false);
      break;
    case 4:
      data.readingAll ? (show = true) : (show = false);
      break;
    default:
      show = true;
      break;
  }

  return (
    <div
      className={`${
        !show ? "hidden" : "visible"
      } h-10 hover:bg-primary-300 dark:hover:bg-primary-600 text-black dark:text-white flex items-center cursor-pointer`}
      onClick={() => selectList(index)}
    >
      <div className={`w-2 h-full bg-${color}-400`}></div>
      <i className="text-2xl mx-2">{icon}</i>
      <h3 className="truncate w-24">{title}</h3>
      <p className="ml-auto mr-4 font-bold">{amount}</p>
    </div>
  );
}
