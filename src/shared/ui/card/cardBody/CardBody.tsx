import classNames from "classnames";
import style from "./cardBody.module.scss";
import { CardBodyProps } from "./cardBodyModel";

const CardBody = ({
  children,
  border,
  padding = "lg",
  customPadding,
  className,
  marginBottom,
  marginTop,
  onClick,
}: CardBodyProps) => {
  return (
    <div
      className={classNames(
        style.card_body,
        style["border_" + border],
        style["padding_" + padding],
        className || ""
      )}
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
export default CardBody;
