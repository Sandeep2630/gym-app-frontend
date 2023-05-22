import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-dark-purple h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      }  relative duration-300`}
    >
      <BsArrowLeftShort
        onClick={() => setOpen((s) => !s)}
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple  cursor-pointer ${
          open && "rotate-180"
        } `}
      />
    </div>
  );
}
