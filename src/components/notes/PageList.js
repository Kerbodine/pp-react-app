import React from "react";

import PageItem from "./PageItem";

export default function PageList({ allPages }) {
  return (
    <div className="flex flex-col mt-16 pt-2">
      {allPages.map((page) => (
        <PageItem
          key={page.key}
          icon={page.icon}
          title={page.title}
          color={page.color}
        />
      ))}
    </div>
  );
}
