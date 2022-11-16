import Link from "next/link";
import { useState } from "react";
import { LoginModal, RegisterModal } from "..";
import { Button, LoginButton, Search } from "../../ui";

import s from "./Header.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { selectUserData } from "../../redux/slices/user";

export const Header = (): JSX.Element => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isRegisterModal, setIsRegisterModal] = useState(false);
  const userData = useAppSelector(selectUserData);
  const links = [
    { id: 1, title: "Статьи", link: "/post" },
    { id: 2, title: "Новости", link: "/" },
    { id: 3, title: "Аналитика", link: "/" },
    { id: 4, title: "Маркетинг", link: "/" },
    { id: 5, title: "E-commerce", link: "/" },
  ];

  console.log(userData);

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrap}>
          <Link href="/" className={s.logo}>
            <p>LOGO</p>
          </Link>

          <nav className={s.nav}>
            {links.map((item) => (
              <Link key={item.id} className={s.nav__link} href={item.link}>
                {item.title}
              </Link>
            ))}
          </nav>

          <div className={s.right}>
            <LoginButton
              onClick={() => {
                setIsLoginModal(!isLoginModal);
              }}
            />

            <Button
              style="accent"
              onClick={() => {
                setIsRegisterModal(!isRegisterModal);
              }}
            >
              Зарегестироваться
            </Button>
            <Search />
          </div>
        </div>
      </div>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModal}
        setIsOpen={setIsLoginModal}
        title="Войдите с помощью почты"
        subtitle={["Введите адрес электронной почты,", <br />, "чтобы создать учетную запись."]}
      />

      <RegisterModal
        isOpen={isRegisterModal}
        setIsOpen={setIsRegisterModal}
        title="Регистрация"
        subtitle={["Введите адрес электронной почты,", <br />, "чтобы создать учетную запись."]}
      />
    </header>
  );
};
