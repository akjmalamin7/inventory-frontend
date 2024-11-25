import { CrossIcon } from "@/assets/icons/crossIcon";
import { EyeIcon } from "@/assets/icons/eyeIcon";
import { SearchIcon } from "@/assets/icons/searchIcon";
import classNames from "classnames";
import React, { useState } from "react";
import style from "./input.module.scss";
import { InputProps } from "./input.schema";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = "text",
      size = "md",
      name,
      placeholder = "Placeholder",
      value,
      disabled,
      allowClear,
      error,
      labelAction,
      helpText,
      suffix,
      prefix,
      className,
      onChange,
      onBlur,
      onFocus,
      onClear,
    },
    ref
  ) => {
    const [visible, setVisible] = useState<boolean>(false);

    const passwordClass = {
      [style["password"]]: type === "password",
    };
    const inputType =
      type === "password" ? (visible ? "text" : "password") : type;

    const onVisible = () => setVisible((prev) => !prev);
    return (
      <div className={style.wrapper}>
        {(label || (labelAction && labelAction.content)) && (
          <div className={style.label_action_wrapper}>
            {label && (
              <label className={classNames(style.label_text)} htmlFor={name}>
                {label}
              </label>
            )}
            {labelAction && (
              <div className={style.action_text_wrapper}>
                <a
                  href={labelAction.url}
                  target={labelAction.target}
                  className={style.action_text}
                >
                  {labelAction.content}
                </a>
              </div>
            )}
          </div>
        )}
        <div
          className={classNames(
            style.input_field_wrapper,
            style[size + "_input"]
          )}
        >
          <input
            ref={ref}
            name={name}
            type={inputType}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            className={classNames(
              style.input_field,
              error && error.status && style.error_style,
              type === "search" && style.search_icon_padding,
              suffix && style.suffix_icon_padding,
              prefix && style.prefix_icon_padding,
              className || ""
            )}
            id={name}
          />

          {type === "password" && (
            <button
              className={classNames(passwordClass)}
              onClick={onVisible}
              type="button"
            >
              <EyeIcon visible={visible} />
            </button>
          )}
          {type === "search" && (
            <button className={classNames(style.search_icon)} type="button">
              <SearchIcon />
            </button>
          )}
          {allowClear && (
            <button
              className={classNames(style.cross_icon)}
              onClick={onClear}
              type="button"
            >
              <CrossIcon />
            </button>
          )}
          {prefix && (
            <button className={classNames(style.prefix)} type="button">
              <SearchIcon />
            </button>
          )}
          {suffix && (
            <button className={classNames(style.suffix)} type="button">
              <SearchIcon />
            </button>
          )}
        </div>
        {helpText && <p className={style.help_text}>{helpText}</p>}
        {error && error.status && (
          <p className={style.error_text}> {error.message} </p>
        )}
      </div>
    );
  }
);
export default Input;
