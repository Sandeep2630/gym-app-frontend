import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

export default function Root() {
  return (
    <>
      <div className="flex ">
        <div>
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
