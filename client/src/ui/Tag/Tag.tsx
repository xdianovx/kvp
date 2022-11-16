import s from "./Tag.module.scss";
import { iTag } from "./Tag.interface";
import Link from "next/link";

export const Tag = ({ title, slug }: iTag) => {
  return (
    <div className={s.tag}>
      <Link href={slug}>{title}</Link>
    </div>
  );
};
