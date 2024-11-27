export type CardFooterProps = {
  children: React.ReactNode;
  justifyContent?: "start" | "center" | "end" | "between" | "around";
  border?: "bottom"|"top";
  padding?:"sm" | "md" | "lg" | "none"
  customPadding?:string;
  isFooterBackground?:boolean;
  className?:string;
  marginTop?:string;
  marginBottom?:string;
};
