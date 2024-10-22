import { useDispatch, useSelector } from "react-redux";
import Popup from "../Popup";

import styles from "./warning.module.scss";
import Button from "../../../ui/button/Button";
import {
  setClosePopup,
  setNextPopup,
} from "../../../../store/slices/popupsSlice";

const Warning = () => {
  const dispatch = useDispatch();

  const { title, text, subtext, buttonText } = useSelector((state) => state.popups);

  const closePopup = () => {
    dispatch(setClosePopup());
  };

  const nextPopup = () => {
    dispatch(setNextPopup());
  };
  const subtextMain = subtext ? subtext.slice(0, -3) : '';
  const subtextLastThree = subtext ? subtext.slice(-3) : '';

  return (
    <Popup>
      {!!title && <p className={styles.warn__title}>{title}</p>}
      {!!subtext && (
        <p className={styles.warn__subtext}>
          {subtextMain}
          <span>{subtextLastThree}</span>
        </p>
      )}
      {!!text && <p className={styles.warn__description}>{text}</p>}
      <Button
        text={buttonText}
        componentStyle={"close__button"}
        onClick={buttonText === "Далее" ? nextPopup : closePopup}
      />
    </Popup>
  );
};
export default Warning;