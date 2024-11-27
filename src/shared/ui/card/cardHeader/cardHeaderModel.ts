export type CardHeaderProps = {
  children: React.ReactNode;
  justifyContent?: "start" | "center" | "end" | "between" | "around";
  border?: "bottom" | "top";
  padding?: "sm" | "md" | "lg" | "none";
  customPadding?: string;
  className?: string;
  isHeadingBackground?: boolean;
  radius?: "xsm" | "sm" | "md" | "lg" | "xlg";
  marginTop?: string;
  onClick?: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  marginBottom?: string;
};
