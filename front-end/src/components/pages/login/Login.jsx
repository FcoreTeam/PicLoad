import styles from "./login.module.scss";

// image
import loginBanner from "../../../img/banners/loginBanner.png";
import Button from "../../button/Button";
import telegramLogo from "../../../img/icons/telegramLogo.svg";

const Login = () => {
  return (
    <div className={styles.login__page}>
      <img src={loginBanner} alt="" className={styles.login__banner} />
      <p className={styles.login__title}>
        Зарабатывай на изображениях <br /> с <span>PicLoad</span>!
      </p>
      <p className={styles.login__subtitle}>
        Авторизируйтесь в приложении через нашего Telegram-бота.
      </p>
      <Button
        text="Войти через Telegram"
        image={telegramLogo}
        componentStyle="login__button"
        componentStyleText="login__text"
      />
      <p className={styles.login__privacy}>
        Проходя авторизацию, вы соглашаетесь с нашей <a href="">политикой
        конфиденциальности</a>
      </p>
    </div>
  );
};
export default Login;