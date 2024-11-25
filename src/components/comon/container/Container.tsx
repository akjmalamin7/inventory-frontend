import classNames from "classnames";
import React from "react";
import style from "./container.module.scss";
interface Props {
  children?: React.ReactNode;
  size?: "xsm" | "sm" | "md" | "lg";
}
const Container = ({ children, size }: Props) => {
  return (
    <div className={classNames(style[size + "_container"])}>{children}</div>
  );
};

export default Container;
