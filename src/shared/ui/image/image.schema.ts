export type ImageProps = {
  imgURL?: string;
  altText?: string;
  width?: string;
  height?: string;
  className?: string;
  size?: "xsm" | "sm" | "md" | "lg" | "xlg";
  objectFit?: "fill" | "contain" | "cover" | "scale_down" | "none";
  isImageScaling?: boolean;
  radius?: string;
  cursor?: "default" | "pointer";
  onClick?: () => void;
};
