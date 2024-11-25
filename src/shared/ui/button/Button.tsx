import classNames from "classnames";
import { forwardRef, Fragment } from "react";
import { Spinner } from "../spinner";
import "./button.scss";

interface Props extends React.ComponentProps<"button"> {
  variant?:
    | "dark"
    | "success"
    | "warning"
    | "danger"
    | "primary"
    | "secondary"
    | "white"
    | "link"
    | "text"
    | "disabled";
  size?: "sm" | "md" | "lg";
  type?: "submit" | "reset" | "button";
  target?: React.HTMLAttributeAnchorTarget;
  href?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    variant = "default",
    size = "md",
    fullWidth = false,
    loading = false,
    type = "button",
  } = props;
  const btnClassnames = classNames(
    "btn",
    `btn--size-${size}`,
    `btn--variant-${variant}`,
    {
      ["btn--disabled"]: props.disabled,
      ["btn--fullWidth"]: fullWidth,
    }
  );

  const innerElement = (
    <Fragment>
      {loading && (
        <span className={classNames({ ["btn__loading"]: loading })}>
          <Spinner size="sm" variant="white" />
        </span>
      )}
      {props.icon} {props.children}
    </Fragment>
  );

  if (props.href && variant === "link")
    return (
      <a href={props.href} target={props.target} className={btnClassnames}>
        {innerElement}
      </a>
    );

  return (
    <button ref={ref} {...props} className={btnClassnames} type={type}>
      {innerElement}
    </button>
  );
});

export default Button;
