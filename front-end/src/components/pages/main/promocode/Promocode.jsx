import { useSelector, useDispatch } from "react-redux";

import styles from "./promocode.module.scss";
import {
  updatePromocodeText,
  updatePromocode,
} from "../../../../store/slices/promocodeSlice";

const Promocode = () => {
  const dispatch = useDispatch();
  const { promocodeText } = useSelector((state) => state.promocode);
  console.log(promocodeText)
  const updatePromocodeTextUi = (e) => {
    dispatch(updatePromocodeText(e.target.value));
  };

  const updatePromocodeFunc = () => {
    dispatch(updatePromocode());
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
          onChange={updatePromocodeTextUi}
        />
        <button onClick={updatePromocodeFunc}>Ввести</button>
      </div>
    </section>
  );
};
export default Promocode;
