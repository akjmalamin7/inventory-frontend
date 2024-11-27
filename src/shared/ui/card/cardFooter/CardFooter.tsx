import classNames from "classnames";
import style from "./cardFooter.module.scss";
import { CardFooterProps } from "./cardFooterModel";

const CardFooter = ({
  children,
  justifyContent,
  border,
  padding = "lg",
  customPadding,
  isFooterBackground,
  className,
  marginBottom,
  marginTop,
}: CardFooterProps) => {
  const footerClasses = classNames(
    style.card_footer,
    justifyContent && style.flex,
    style["flex_" + justifyContent],
    isFooterBackground && style.footer_bg,
    style["border_" + border],
    style["padding_" + padding],
    className || ""
  );
  return (
    <div
      className={footerClasses}
      style={{
        padding: customPadding,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
    >
      {children}
    </div>
  );
};
export default CardFooter;
