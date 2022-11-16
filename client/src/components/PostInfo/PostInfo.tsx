import { iPostInfo } from "./PostInfo.interface";
import s from "./PostInfo.module.scss";

export const PostInfo = ({ avatar, name, date, commentsCount, views }: iPostInfo) => {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.wrap}>asd</div>
      </div>
    </section>
  );
};
