import Container from "../Container/Container";
import style from "./Footer.module.css";
import { ReactComponent as VKIcon } from "../../img/VK.com.svg";
import { ReactComponent as TGIcon } from "../../img/tg.svg";
import { ReactComponent as PinterestIcon } from "../../img/pinterest.svg";
import { ReactComponent as StumleuponIcon } from "../../img/stumbleupon.svg";

const Footer = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.wrapper}>
        <div className={style.contacts}>
          <p>
            Design: <a href='https://t.me/Mrshamallowww'>Anastasia Ilina</a>
          </p>
          <p>
            Сoder: <a href='https://t.me/lyudamila'>Lyudmila Dubrovina</a>
          </p>
          <p>© HBCard, 2022</p>
        </div>
        <ul className={style.social}>
          <li className={style.item}>
            <a href='https://vk.com/yalyudmilka' className={style.link}>
              <VKIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href='https://t.me/lyudamila' className={style.link}>
              <TGIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href='https://pinterest.com' className={style.link}>
              <PinterestIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href='https://stumbleupon.com/' className={style.link}>
              <StumleuponIcon />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
);

export default Footer;
