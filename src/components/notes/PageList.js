import React from "react";
import PageItem from "./PageItem";

export default function PageList({ allPages }) {
  return (
    <div className="overflow-hidden overflow-y-scroll h-full">
      {allPages.map((page) => (
      <div key={page.key}>
        <PageItem
          icon={page.icon}
          title={page.title}
          color={page.color}
        />
      </div>
    ))}
    </div>
  );
}
