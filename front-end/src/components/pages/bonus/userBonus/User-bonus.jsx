import clsx from "clsx";

import Button from "../../../ui/button/Button";

import openAsk from "../../../../img/icons/openArrow.svg"

import styles from "./user-bonus.module.scss";

const UserBonus = ({
  bonusState,
  bonusReward,
  bonusName,
  bonusDescription,
  bonusLink,
  buttonImage,
  bonusCount,
  bonusAsk,
}) => {
  return (
    <section className={styles.bonus}>
      <div className={styles.bonus__top}>
        <div
          className={clsx(
            styles.bonus__state,
            bonusState ? styles.completed : styles.not__completed
          )}
        >
          {bonusState ? "🔥 Выполнено" : "⏳ Не выполнено"}
        </div>
        <div className={styles.line}></div>
        <div className={styles.bonus__reward}>{bonusReward} ₽</div>
      </div>
      <section className={styles.bonus__info}>
        <div className={styles.bonus__text}>
          <p className={styles.bonus__name}>{bonusName}</p>
          <p className={styles.bonus__description}>{bonusDescription}</p>
        </div>
        <a href={bonusLink}>
          <Button image={buttonImage} componentStyle="bonus__button" />
        </a>
      </section>
      {bonusCount && <></>}
      {bonusAsk == "Как скачать?" ? (
        <div className={styles.bonus__ask}>
          <p className={styles.ask}>{bonusAsk}</p>
          <img src={openAsk} alt="" className={styles.open__ask} />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};
export default UserBonus;
