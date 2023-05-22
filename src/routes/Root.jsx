import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function Root() {
  return (
    <>
      <div className="flex ">
        <div>
          <Sidebar />
        </div>
        <div>
          <div>Top Navbar</div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
