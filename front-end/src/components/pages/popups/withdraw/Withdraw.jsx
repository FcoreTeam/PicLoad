import Popup from "../Popup";

import { useSelector } from "react-redux";

import styles from "./withdraw.module.scss";

const Withdraw = () => {
  const { title } = useSelector((state) => state.popups);
  return (
    <Popup>
      <p className={styles.popup__name}>{title}</p>
      <section className={styles.popup__section}>
        <p className={styles.input__name}>Направление:</p>
        <input type="text" disabled value="Банковская карта РФ" />
        <p className={styles.input__name}>Сумма</p>
        <input type="number" />
        <p className={styles.input__name}>Реквизиты</p>
        <input type="text"/>
      </section>
    </Popup>
  );
};
export default Withdraw;
