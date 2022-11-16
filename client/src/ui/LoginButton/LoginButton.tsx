import s from "./LoginButton.module.scss";
import IconSvg from "./profile.svg";

export const LoginButton = ({ ...props }) => {
  return (
    <div className={s.btn} {...props}>
      <IconSvg />
      <p>Войти</p>
    </div>
  );
};
