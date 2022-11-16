import Link from "next/link";
import { FC } from "react";
import s from "./Footer.module.scss";
export const Footer: FC = () => {
  const links = [
    { id: 1, title: "Правила", link: "/rules" },
    { id: 2, title: "Помощь", link: "/faq" },
    { id: 3, title: "Политика конфиденциальности", link: "/privacy" },
    { id: 4, title: "Правила обработки куки", link: "/cookies" },
  ];
  return (
    <footer className={s.footer}>
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
            <div className={s.right__top}></div>
            <div className={s.right__bottom}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
