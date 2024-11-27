import classNames from "classnames";
import style from "./cardHeader.module.scss";
import { CardHeaderProps } from "./cardHeaderModel";

const CardHeader = ({
  children,
  justifyContent,
  border,
  padding = "lg",
  customPadding,
  className,
  isHeadingBackground,
  radius,
  marginBottom,
  marginTop,
  onClick,
}: CardHeaderProps) => {
  const headerClasses = classNames(
    style.card_header,
    justifyContent && style.flex,
    isHeadingBackground && style.heading_bg,
    style["flex_" + justifyContent],
    style["border_" + border],
    style["padding_" + padding],
    className || "",
    style["radius_" + radius]
  );
  return (
    <div
      className={headerClasses}
      style={{
        padding: customPadding,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export default CardHeader;
