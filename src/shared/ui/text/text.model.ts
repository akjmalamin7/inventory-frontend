export type TextProps = {
  type?: "paragraph" | "span" | "link" | "heading";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  headingAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "black" | "gray" | "green" | "red" | "yellow" | "blue" | "purple";
  customColor?: string | undefined;
  textDecoration?:
    | "default"
    | "line_through"
    | "underline"
    | "overline"
    | "superline";
  textAlign?: "start" | "center" | "end" | "justify";
  fontWeight?: "default" | "regular" | "medium" | "semiBold" | "bold";
  target?: "_blank" | "_self" | "_parent" | "_top";
  url?: string;
  hover?: boolean;
  truncate?: boolean;
  marginTop?: string;
  marginBottom?: string;
  children?: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};
