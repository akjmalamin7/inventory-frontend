export type UserAvatarProps = {
  size: "xlg" | "lg" | "md" | "sm";
  name?: string;
  url?: string;
  radius?: string;
  onOk?: () => void;
};
