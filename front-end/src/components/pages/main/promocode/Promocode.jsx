import { useState } from "react";
import { useDispatch } from "react-redux";

import { sendPromocode } from "../../../../api/requests";
import { setPopupData } from "../../../../store/slices/popupsSlice";

import styles from "./promocode.module.scss";

const Promocode = () => {
  const dispatch = useDispatch();
  const [promoCode, setPromoCode] = useState("");

  const sendPromo = () => {
    sendPromocode(promoCode).then(({ data: { success = null } }) => {
      dispatch(
        setPopupData({
          isOpen: true,
          popupName: "warning",
          title: "Уведомление",
          text:
            success === null
              ? "Повторите попытку, пожалуйста, чуть позже!"
              : `Промокод ${success ? "активирован!" : "не найден!"}`,
          buttonText: "Закрыть",
        })
      );
      setPromoCode("");
    });
  };

  return (
    <section className={styles.promocode__section}>
      <p className={styles.section__name}>Промокод 🎁</p>
      <p className={styles.section__description}>
        Для получения некоторых бонусов
      </p>
      <div className={styles.input__wrapper}>
        <input
          type="text"
          placeholder="Введите промокод"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)} // Update state on input change
          maxLength={19}
        />
        <button
          disabled={promoCode.length < 2} // Button disabled based on state
          onClick={sendPromo}
        >
          Ввести
        </button>
      </div>
    </section>
  );
};

export default Promocode;
