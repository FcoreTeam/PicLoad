import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRef } from "react";

import styles from "./promocode.module.scss";
import {
  updatePromocodeText,
} from "../../../../store/slices/promocodeSlice";


const Promocode = () => {
  const dispatch = useDispatch();
  const getPromocode = useRef(null);
  const { promocodeText } = useSelector((state) => state.promocode);

  const updatePromocodeTextUi = () => {
    let text = getPromocode.current.value;
    dispatch(updatePromocodeText(text));
  };

  const updatePromocode = () => {
    dispatch(updatePromocode());
    debugger
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
          value={promocodeText}
          ref={getPromocode}
          onChange={updatePromocodeTextUi}
        />
        <button onClick={updatePromocode}>Ввести</button>
      </div>
    </section>
  );
};
export default Promocode;
