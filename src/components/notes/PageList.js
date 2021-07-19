import React from "react";
import PageItem from "./PageItem";

export default function PageList({ allPages }) {
  return (
    <ul className="overflow-y-auto overflow-hidden list-none h-screen">
      {allPages.map((page) => (
      <li key={page.key}>
        <PageItem
          icon={page.icon}
          title={page.title}
          color={page.color}
        />
      </li>
    ))}
    </ul>
  );
}
