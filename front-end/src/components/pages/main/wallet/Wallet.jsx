import { useDispatch, useSelector } from "react-redux";

import styles from "./wallet.module.scss";
import { setPopupData } from "../../../../store/slices/popupsSlice";

const Wallet = () => {
  const { balance, income } = useSelector((state) => state.user);
  const {
    naturePhotos,
    architecturePhotos,
    foodPhotos,
    sportPhotos,
    travelPhotos,
  } = useSelector((state) => state.user.categoriesPhotoCounts);
  const { isNext } = useSelector((state) => state.popups);

  let uploadedPhotos =
    naturePhotos + architecturePhotos + foodPhotos + sportPhotos + travelPhotos;
  let popupStepCounter = 0
  const dispatch = useDispatch();

  const showWithdrawPopupUi = () => {
    dispatch(
      setPopupData({ isOpen: true, popupName: "withdraw", title: "Вывод" })
    );
    if (balance <= 3000) {
      dispatch(
        setPopupData({
          isOpen: true,
          popupName: "warning",
          title: "Вывод",
          text: "Минимальная сумма вывода 3000р",
          buttonText: "Закрыть",
        })
      );
    } else if (uploadedPhotos < 30) {
      dispatch(
        setPopupData({
          isOpen: true,
          popupName: "warning",
          title: "Вывод",
          text: "Для вывода необходимо иметь 30 загруженных фотографий",
          buttonText: "Закрыть",
        })
      );
    } else {
      dispatch(
        setPopupData({
          isOpen: true,
          popupName: "warning",
          title: "Почти готово ✅",
          text: "Ваши средства находятся на стоковом сайте. Для их вывода необходимо оплатить комиссию обменников за конвертацию USD в RUB Это комиссия обменников",
          buttonText: "Далее",
        })
      );
    }
  };
  if (isNext) {
    popupStepCounter += 1;
    dispatch(
      setPopupData({
        isOpen: true,
        popupName: "warning",
        title: "Информация о комиссии",
        subtext: "Комиссия обменников составляет 10%",
        text: "Комиссия необходима для перевода средств с американского стокового сайта на рублевый счет",
        buttonText: "Далее",
      })
    );
  }
  // if(popupStepCounter == 1){
  //   dispatch(
  //     setPopupData({
  //       isOpen: true,
  //       popupName: "warning",
  //       title: "Информа432ссии",
  //       subtext: "Комиссия обменников составляет 10%",
  //       text: "Комиссия необходима для перевода средств с американского стокового сайта на рублевый счет",
  //       buttonText: "Далее",
  //     })
  //   );
  // }

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
            <span className={styles.ruble}>₽</span>
          </p>
          <p className={styles.income}>
            <span>+₽{income}</span> за последние 7 дней
          </p>
        </div>
        <div className={styles.button__wrapper}>
          <button className={styles.withdraw} onClick={showWithdrawPopupUi}>
            Вывести
          </button>
        </div>
      </div>
    </section>
  );
};
export default Wallet;
