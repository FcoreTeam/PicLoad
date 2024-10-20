import Popup from "../Popup";

import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";

import styles from "./withdraw.module.scss";
import {
  updateCardNumberText,
  updateMoneyText,
  updateMoney,
  updateCardNumber,
  withdraw,
} from "../../../../store/slices/withdrawSlice";

const Withdraw = () => {
  const { title } = useSelector((state) => state.popups);
  const { cardNumberText, moneyText } = useSelector((state) => state.withdraw);
  const getCardText = useRef(null);
  const getMoneyText = useRef(null);
  const dispatch = useDispatch();

  const changeCardNumberUi = () => {
    let text = getCardText.current.value;
    dispatch(updateCardNumberText(text));
  };
  const changeMoneyTextUi = () => {
    let text = getMoneyText.current.value;
    dispatch(updateMoneyText(text));
  };
  const withdrawUi = () => {
    dispatch(updateCardNumber())
    dispatch(updateMoney())
    dispatch(withdraw());
  }

  return (
    <Popup>
      <p className={styles.popup__name}>{title}</p>
      <section className={styles.popup__section}>
        <p className={styles.input__name}>Направление:</p>
        <div className={styles.input__wrapper}>
          <input type="text" disabled value="Банковская карта РФ" />
        </div>
        <p className={styles.input__name}>Сумма</p>
        <div className={styles.input__wrapper}>
          <input
            type="number"
            value={moneyText}
            ref={getMoneyText}
            onChange={changeMoneyTextUi}
          />
        </div>
        <p className={styles.input__name}>Реквизиты</p>
        <div className={styles.input__wrapper}>
          <input
            type="number"
            value={cardNumberText}
            ref={getCardText}
            onChange={changeCardNumberUi}
          />
          <button className={styles.save__data} onClick={withdrawUi}>Вывести</button>
        </div>
      </section>
    </Popup>
  );
};
export default Withdraw;
