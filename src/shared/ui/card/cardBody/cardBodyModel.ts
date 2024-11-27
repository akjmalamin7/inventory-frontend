export type CardBodyProps = {
  children: React.ReactNode;
  border?: "bottom"|"top";
  padding?: "sm" | "md" | "lg" | "none";
  customPadding?:string;
  className?:string;
  marginTop?:string;
  marginBottom?:string;
  onClick?: () => void
};
