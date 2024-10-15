import styles from "./user-bonus.module.scss";

import clsx from "clsx";

const UserBonus = ({
  bonusState,
  bonusReward,
  bonusName,
  bonusDescription,
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
        <div className={styles.bonus__reward}>{bonusReward}</div>
      </div>
      <section className={styles.bonus__info}>
        <div className={styles.bonus__text}>
          <p className={styles.bonus__name}>{bonusName}</p>
          <p className={styles.bonus__description}>{bonusDescription}</p>
        </div>
      </section>
      {bonusCount && <></>}
      {bonusAsk && <></>}
    </section>
  );
};
export default UserBonus;
