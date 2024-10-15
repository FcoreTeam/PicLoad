import UserBonus from "./userBonus/User-bonus";

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
        <UserBonus />
      </div>
    </section>
  );
};
export default Bonus;
