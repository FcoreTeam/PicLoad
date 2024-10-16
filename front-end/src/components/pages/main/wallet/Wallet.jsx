import { useDispatch, useSelector } from "react-redux";

import styles from "./wallet.module.scss";
import { setPopupData } from "../../../../store/slices/popupsSlice";

const Wallet = () => {
  const { balance, income } = useSelector((state) => state.user);
  let remainder = balance.toFixed(2).slice(2, 4);
  const dispatch = useDispatch();

  const showWithdrawPopup = () => {
    if (balance <= 200) {
      dispatch(
        setPopupData({
          isOpen: true,
          popupName: "warning",
          title: "Внимание ⚠️",
          text: "Вывод доступен только для суммы от 200 рублей!",
          buttonText: "Закрыть",
        })
      );
    } else {
      dispatch(
        setPopupData({
          isOpen: true,
          popupName: "warning",
          title: "Почти готово ✅",
          text: "Ваши средства находятся на стоковом сайте. Для их вывода необходимо оплатить комиссию.",
          buttonText: "Далее",
        })
      );
    }
  };

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
          <button className={styles.withdraw} onClick={showWithdrawPopup}>
            Вывести
          </button>
        </div>
      </div>
    </section>
  );
};
export default Wallet;
