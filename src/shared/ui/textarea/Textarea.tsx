
import { CrossIcon } from "@/assets/icons/crossIcon";
import classNames from "classnames";
import React from "react";
import style from "./textarea.module.scss";
import { TextareaProps } from "./textarea.schema";
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      name,
      placeholder = "Placeholder",
      value,
      disabled,
      allowClear,
      error,
      label,
      labelAction,
      helpText,
      onChange,
      onBlur,
      onFocus,
      onClear,
    },
    ref
  ) => {
    return (
      <div>
        {(label || (labelAction && labelAction.content)) && (
          <div className={style.label_action_wrapper}>
            {label && (
              <label className={classNames(style.label_text)} htmlFor={name}>
                {label}
              </label>
            )}
            {labelAction && (
              <div className={style.action_text_wrapper}>
                <a href={labelAction.url} target={labelAction.target} className={style.action_text}>
                  {labelAction.content}
                </a>
              </div>
            )}
          </div>
        )}
        <div className={classNames(style.input_field_wrapper)}>
          <textarea
            ref={ref}
            name={name}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            className={classNames(style.textarea_field, error && style.error_style)}
            id={name}
          ></textarea>
        </div>
        {allowClear && (
          <button className={classNames(style.cross_icon)} onClick={onClear}>
            <CrossIcon size="lg" />
          </button>
        )}

        {helpText && <p className={style.help_text}>{helpText}</p>}
        {error && <p className={style.error_text}> {error.message || "Unknown error"} </p>}
      </div>
    );
  }
);

export default Textarea;