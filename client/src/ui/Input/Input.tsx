import s from "./Input.module.scss";
import { iInput } from "./Input.interface";
import cn from "classnames";

export const Input = ({ title, type, placeholder, className, form, error }: iInput) => {
  return (
    <div className={cn(s.wrap, className)}>
      {title && (
        <p
          className={cn(s.title, {
            [s.err]: error,
          })}
        >
          {title}
        </p>
      )}
      <input
        className={cn(s.input, {
          [s.err]: error,
        })}
        type="text"
        placeholder={placeholder}
        {...form}
      />
      {error && <p className={s.error__text}>{error}</p>}
    </div>
  );
};
