import React from "react";

export default function SidebarItem({ name, Icon, path }) {
  //   console.log(name, Icon, path);
  return (
    <div className="flex">
      <div>
        <Icon />
      </div>
      <div>{name}</div>
    </div>
  );
}
