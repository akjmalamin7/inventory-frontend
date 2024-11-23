import { RootState } from "@reduxjs/toolkit/query";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import style from "./layout.module.scss";
const Layout = () => {
  const sidebarVisible = useSelector(
    (state: RootState) => state.header.isSidebar
  );
  return (
    <div>
      <header className={style.header}>
        <Header />
      </header>
      <aside
        className={classNames(style.sidebar, {
          [style.active]: sidebarVisible,
        })}
      >
        <Sidebar />
      </aside>
      <main className={style.body}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
