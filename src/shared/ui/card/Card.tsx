import classNames from "classnames";
import style from "./card.module.scss";
import { CardBody } from "./cardBody";
import { CardFooter } from "./cardFooter";
import { CardHeader } from "./cardHeader";
import { CardProps } from "./cardModel";

interface CardComponent extends React.FC<CardProps> {
  Body: typeof CardBody;
  Header: typeof CardHeader;
  Footer: typeof CardFooter;
}
const Card: CardComponent = ({
  card_style = "shadow",
  children,
  overflow = "visible",
  className,
  radius,
  marginBottom,
  marginTop,
}: CardProps) => {
  return (
    <div
      style={{
        overflow: `${overflow}`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
      className={classNames(
        style.card,
        style["cart_type_" + card_style],
        style["radius_" + radius],
        className || ""
      )}
    >
      {children}
    </div>
  );
};
Card.Body = CardBody;
Card.Header = CardHeader;
Card.Footer = CardFooter;

export default Card;
