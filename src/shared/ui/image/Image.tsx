import IMG from "@/assets/images/placeholder.png";
import classNames from "classnames";
import style from "./image.module.scss";
import { ImageProps } from "./image.schema";
const Image = ({
  imgURL,
  altText,
  size = "md",
  objectFit,
  className,
  width,
  height,
  radius,
  isImageScaling,
  cursor,
  onClick,
}: ImageProps) => {
  return (
    <div
      className={classNames(
        style.placeholder_image,
        className || "",
        style[size + "_placeholder"],
        style["object_fit_" + objectFit],
        isImageScaling && style["image_scaling"],
        style[cursor + "cursor"]
      )}
      style={{ width: width, height: height, borderRadius: radius }}
      onClick={onClick}
    >
      <img src={imgURL ? imgURL : IMG} alt={altText ? altText : ""} />
    </div>
  );
};

export default Image;
