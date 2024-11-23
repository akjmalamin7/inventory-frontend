import classNames from "classnames";
import { forwardRef } from "react";
import "./spinner.scss";
interface Props extends React.ComponentProps<"span"> {
  size?: "xsm" | "sm" | "md" | "lg" | "xlg";
  variant?: "default" | "white";
}

const Spinner = forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const { size = "sm", variant = "default" } = props;
  return (
    <span
      ref={ref}
      {...props}
      className={classNames(
        "spinner",
        `spinner--size-${size}`,
        `spinner--variant-${variant}`
      )}
    ></span>
  );
});

export default Spinner;
