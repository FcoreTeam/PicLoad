import UserBonus from "./userBonus/User-bonus";

import telegramLogo from "../../../img/icons/telegramLogo.svg";
import downloadLogo from "../../../img/icons/download.svg";

import styles from "./bonus.module.scss";

const Bonus = () => {
  return (
    <section className={styles.bonus__page}>
      <div className={styles.page__preview}>
        <p className={styles.page__title}>Бонусы</p>
        <p className={styles.page__description}>
          Выполняйте задания и получайте вознаграждения
        </p>
      </div>
      <div className={styles.bonuses}>
        <UserBonus
          bonusState={false}
          bonusReward={100}
          bonusName="Подпишитесь на наш канал"
          bonusDescription="Подпишитесь на наш канал в [название платформы] и получите 100 рублей на счет!"
          buttonImage={telegramLogo}
        />
        <UserBonus
          bonusState={true}
          bonusReward={50}
          buttonImage={downloadLogo}
          bonusName="Скачайте приложение"
          bonusDescription="Установите наше мобильное приложение и получите 50 рублей на счет."
          bonusAsk="Как скачать?"
        />
      </div>
    </section>
  );
};
export default Bonus;
