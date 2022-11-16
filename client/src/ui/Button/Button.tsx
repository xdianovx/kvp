import React from "react";
import { iButton } from "./Button.interface";
import cn from "classnames";
import s from "./Button.module.scss";
export const Button = ({ style, children, className, submit, link, ...props }: iButton) => {
  return (
    <button
      className={cn(s.btn, className, {
        [s.accent]: style === "accent",
        [s.bordered]: style === "bordered",
      })}
      type={submit && "submit"}
      {...props}
    >
      {children}
    </button>
  );
};
