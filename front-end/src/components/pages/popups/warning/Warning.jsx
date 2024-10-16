import { useDispatch, useSelector } from "react-redux";
import Popup from "../Popup";

import styles from "./warning.module.scss";
import Button from "../../../ui/button/Button";
import { setClosePopup } from "../../../../store/slices/popupsSlice";

const Warning = () => {
  const dispatch = useDispatch();

  const { title, text, buttonText } = useSelector((state) => state.popups);

  const closePopup = () => {
    dispatch(setClosePopup());
  };

  return (
    <Popup>
      {!!title && <p className={styles.warn__title}>{title}</p>}
      {!!text && <p className={styles.warn__description}>{text}</p>}
      <Button
        text={buttonText}
        componentStyle={"close__button"}
        onClick={closePopup}
      />
    </Popup>
  );
};
export default Warning;
