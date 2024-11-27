export type CardProps = {
  card_style?: "bordered" | "shadow";
  children?: React.ReactNode;
  className?: string;
  radius?: "xsm" | "sm" | "md" | "lg" | "xlg";
  overflow?: "visible" | "hidden" | "auto";
  marginTop?: string;
  marginBottom?: string;
};
