import { useSelector } from "react-redux";

import styles from "./wallet.module.scss";

const Wallet = () => {
  const { balance, income } = useSelector((state) => state.user);
  let remainder = balance.toFixed(2).slice(2, 4);

  return (
    <section className={styles.wallet__section}>
      <p className={styles.section__name}>Доступный баланс 💰</p>
      <p className={styles.section__description}>
        Доступный баланс и вывод средств
      </p>
      <div className={styles.wallet__wrapper}>
        <div className={styles.money__info}>
          <p className={styles.money}>
            {balance}
            <span>{balance == 0 ? "." + remainder : null}</span>{" "}
            <span className={styles.ruble}>₽</span>
          </p>
          <p className={styles.income}>
            <span>+₽{income}</span> за последние 7 дней
          </p>
        </div>
        <div className={styles.button__wrapper}>
          <button className={styles.withdraw}>Вывести</button>
        </div>
      </div>
    </section>
  );
};
export default Wallet;
