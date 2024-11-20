import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Sidebar } from "../sidebar";

const Layout = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
