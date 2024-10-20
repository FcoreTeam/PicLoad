import UserBonus from "./userBonus/User-bonus";

import telegramLogo from "../../../img/icons/telegramLogo.svg";
import downloadLogo from "../../../img/icons/copy.svg";

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
          bonusState={false}
          bonusType="count"
          counter={1}
          bonusAsk="присоединились по вашей ссылке"
          bonusReward={"∞"}
          buttonImage={downloadLogo}
          bonusName="Поделитесь с друзьями"
          bonusDescription="Поделитесь своей реферальной ссылкой в социальных сетях и получите 450 рублей за каждого приглашенного друга."
        />
        <UserBonus
          buttonHide={true}
          bonusState={false}
          bonusReward={150}
          bonusName="Загрузите 50 фото"
          bonusDescription="Загрузите 50 фотографий на платформу и получите 150 рублей на счет"
        />
        <UserBonus
          buttonHide={true}
          bonusState={false}
          bonusReward={200}
          bonusName="Загрузите 150 фото"
          bonusDescription="Загрузите 150 фотографий на платформу и получите дополнительно 200 рублей на счет."
        />
      </div>
    </section>
  );
};
export default Bonus;
