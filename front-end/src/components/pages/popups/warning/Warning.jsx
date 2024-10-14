import { useDispatch, useSelector } from "react-redux";
import Popup from "../Popup";

import styles from "./warning.module.scss";
import Button from "../../../ui/button/Button";
import { setClosePopup } from "../../../../store/slices/popupsSlice";

const Warning = () => {
  const dispatch = useDispatch()

  const { title, text } = useSelector((state) => state.popups);

  const closePopup = () => {
    dispatch(setClosePopup())
  }
  
  return (
    <Popup>
      {!!title && <p>{title}</p>}
      {!!text && <p className="white75">{text}</p>}
      <Button text={"Закрыть"} componentStyle={"contact__button"} onClick={closePopup} />
    </Popup>
  );
};
export default Warning;
