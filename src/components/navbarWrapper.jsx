import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
export default function NavbarWrapper() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
