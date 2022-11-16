import React, { FC } from "react";
import IconSvg from "./icon.svg";
import s from "./Search.module.scss";

export const Search: FC = () => {
  return (
    <div className={s.wrap}>
      <IconSvg />
    </div>
  );
};
