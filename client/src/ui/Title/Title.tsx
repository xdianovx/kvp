import s from "./Title.module.scss";
import { iTitle } from "./Title.interface";
import cn from "classnames";

export const Title: any = ({ children, className, tag }: iTitle) => {
  switch (tag) {
    case "h1":
      return <h1 className={cn(s.h1, className)}>{children}</h1>;

    case "h2":
      return <h2 className={cn(s.h2, className)}>{children}</h2>;

    case "h3":
      return <h3 className={cn(s.h3, className)}>{children}</h3>;

    case "h4":
      return <h4 className={cn(s.h4, className)}>{children}</h4>;
  }
};
