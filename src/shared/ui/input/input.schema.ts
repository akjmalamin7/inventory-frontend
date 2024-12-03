import React, { ChangeEvent, FocusEvent } from "react";
export interface ErrorType {
  status: boolean;
  message: string | undefined; // Allow undefined
}

export type LabelActionType = {
  content: string;
  url?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onAction?: () => void;
  onMouseEnter?: () => void;
};

export type InputProps = {
  type?: "text" | "email" | "password" | "number" | "tel" | "search";
  size?: "sm" | "md" | "lg";
  name?: string;
  placeholder?: string;
  label?: string;
  helpText?: string;
  value?: string;
  maxLength?: number;
  disabled?: boolean;
  labelHidden?: boolean;
  allowClear?: boolean;
  readOnly?: boolean;
  error?: ErrorType;
  labelAction?: LabelActionType;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};
