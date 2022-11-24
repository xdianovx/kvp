import cn from "classnames";
import { iCard } from "./Card.interface";
import s from "./Card.module.scss";

export const Card = ({ className, ...props }: iCard) => {
  return <div className={cn(s.card, className)}>Card</div>;
};
