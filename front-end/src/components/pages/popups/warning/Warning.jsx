import { useDispatch, useSelector } from "react-redux";
import Popup from "../Popup";

import {
  setClosePopup,
  setNextPopup,
} from "../../../../store/slices/popupsSlice";

import Button from "../../../ui/button/Button";

import styles from "./warning.module.scss";
import { NavLink } from "react-router-dom";

const Warning = () => {
  const dispatch = useDispatch();

  const { title, text, subtext, buttonText, linkText, buttonTextDark } =
    useSelector((state) => state.popups);

  const closePopup = () => {
    dispatch(setClosePopup());
  };

  const nextPopup = () => {
    dispatch(setNextPopup());
  };
  const subtextMain = subtext ? subtext.slice(0, -3) : "";
  const subtextLastThree = subtext ? subtext.slice(-3) : "";

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
      <div className={styles.buttons__wrapper}>
        <Button
          text={buttonText}
          componentStyle={buttonTextDark && "dark__button"}
          onClick={buttonText === "Далее" ? nextPopup : closePopup}
        />
        {!!linkText && (
          <NavLink to="/shop" onClick={closePopup}>
            <Button
              text={linkText}
              componentStyle={buttonTextDark && "close__button"}
            />
          </NavLink>
        )}
      </div>
    </Popup>
  );
};
export default Warning;
