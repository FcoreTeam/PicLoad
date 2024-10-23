import { useDispatch, useSelector } from "react-redux";
import Popup from "../Popup";

import {
  setClosePopup,
  setPopupData,
} from "../../../../store/slices/popupsSlice";

import Button from "../../../ui/button/Button";

import styles from "./upgrade.module.scss";

const Warning = () => {
  const dispatch = useDispatch();

  const { title, text, productPrice } = useSelector((state) => state.popups);

  const openPaymentFinishPopup = () => {
    dispatch(
      setPopupData({
        isOpen: true,
        popupName: "warning",
        title: "Оплачено ✅",
        buttonText: "Закрыть",
      })
    );
  };

  return (
    <Popup>
      {!!title && <p className={styles.warn__title}>{title}⭐️</p>}
      {!!text && (
        <ul className={styles.upgrade__ul}>
          {text.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
      )}
      <Button
        text={`Купить за ${productPrice}₽`}
        componentStyle={"buy__button"}
        onClick={openPaymentFinishPopup}
      />
    </Popup>
  );
};
export default Warning;
