import { useSelector } from "react-redux";

import styles from "./wallet.module.scss";

const Wallet = () => {
  return (
    <section className={styles.wallet__section}>
      <p className={styles.section__name}>Доступный баланс 💰</p>
      <p className={styles.section__description}>
        Доступный баланс и вывод средств
      </p>
      <div className={styles.wallet__wrapper}>
        <div className={styles.money__info}>
          <p className={styles.money}></p>
          <p className={styles.income}></p>
        </div>
        
      </div>
    </section>
  );
};
export default Wallet;
