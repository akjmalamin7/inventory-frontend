import classNames from "classnames";

import { TextProps } from "./text.model";
import style from "./text.module.scss";

const Text = ({
  type = "paragraph",
  size = "md",
  url = "",
  target = "_blank",
  hover = true,
  headingAs = "h1",
  color = "default",
  customColor,
  truncate = false,
  textDecoration = "default",
  marginBottom,
  marginTop,
  children,
  textAlign = "start",
  fontWeight = "default",
  onClick,
}: TextProps) => {
  const commonClasses = classNames(
    style[color],
    style[textAlign],
    style[textDecoration],
    style[fontWeight],
    style[type + "_" + size],
    { [style["truncate"]]: truncate }
  );
  const headingClasses = classNames(style[headingAs]);

  if (type === "paragraph")
    return (
      <p
        className={classNames(style.paragraph, commonClasses)}
        style={{
          color: customColor,
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
        }}
      >
        {children}
      </p>
    );

  if (type === "span")
    return (
      <span
        className={classNames(style.span, commonClasses)}
        style={{
          color: customColor,
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
        }}
      >
        {children}
      </span>
    );
  if (type === "link")
    return (
      <a
        {...(url && { href: url })}
        {...(url && { target: target || "_self" })}
        className={classNames(style.link, commonClasses, {
          [style["hover"]]: hover,
        })}
        onClick={onClick}
        style={{
          color: customColor,
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
        }}
      >
        {children}
      </a>
    );

  if (type === "heading") {
    if (headingAs === "h1")
      return (
        <h1
          className={classNames(headingClasses, commonClasses)}
          style={{
            color: customColor,
            marginTop: `${marginTop}px`,
            marginBottom: `${marginBottom}px`,
          }}
        >
          {children}
        </h1>
      );
    if (headingAs === "h2")
      return (
        <h2
          className={classNames(headingClasses, commonClasses)}
          style={{
            color: customColor,
            marginTop: `${marginTop}px`,
            marginBottom: `${marginBottom}px`,
          }}
        >
          {children}
        </h2>
      );
    if (headingAs === "h3")
      return (
        <h3
          className={classNames(headingClasses, commonClasses)}
          style={{
            color: customColor,
            marginTop: `${marginTop}px`,
            marginBottom: `${marginBottom}px`,
          }}
        >
          {children}
        </h3>
      );
    if (headingAs === "h4")
      return (
        <h4
          className={classNames(headingClasses, commonClasses)}
          style={{
            color: customColor,
            marginTop: `${marginTop}px`,
            marginBottom: `${marginBottom}px`,
          }}
        >
          {children}
        </h4>
      );
    if (headingAs === "h5")
      return (
        <h5
          className={classNames(headingClasses, commonClasses)}
          style={{
            color: customColor,
            marginTop: `${marginTop}px`,
            marginBottom: `${marginBottom}px`,
          }}
        >
          {children}
        </h5>
      );
    if (headingAs === "h6")
      return (
        <h6
          className={classNames(headingClasses, commonClasses)}
          style={{
            color: customColor,
            marginTop: `${marginTop}px`,
            marginBottom: `${marginBottom}px`,
          }}
        >
          {children}
        </h6>
      );
  }
  return null;
};

export default Text;
