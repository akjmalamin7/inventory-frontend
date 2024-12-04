export type ErrorType = {
  status: boolean;
  message: string | undefined;
};

export type LabelActionType = {
  content: string;
  url?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onAction?: () => void;
  onMouseEnter?: () => void;
};

export type TextareaProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  helpText?: string;
  value?: string | number;
  maxLength?: number;
  disabled?: boolean;
  labelHidden?: boolean;
  allowClear?: boolean;
  error?: ErrorType;
  readOnly?: boolean;
  labelAction?: LabelActionType;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void; // Updated type
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void; // Updated type
  onClear?: () => void;
};

