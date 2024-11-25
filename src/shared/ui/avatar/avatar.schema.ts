export type UserAvatarProps = {
  size: "xlg" | "lg" | "md" | "sm";
  name?: string;
  url?: string;
  radius?: string;
  borderColor?:
    | "black"
    | "gray"
    | "yellow"
    | "blue"
    | "red"
    | "green"
    | "purple";
  onOk?: () => void;
};
