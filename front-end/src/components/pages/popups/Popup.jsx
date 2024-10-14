import { useDispatch, useSelector } from "react-redux";
import styles from "./popup.module.scss";
import { setClosePopup } from "../../../store/slices/popupsSlice";
import { useEffect, useRef } from "react";
import useDisableBodyScroll from "../../../hooks/useDisableBodyScroll";

const Popup = ({ children }) => {
  useDisableBodyScroll();
  const dispatch = useDispatch();
  const popupWindowRef = useRef();

  const closePopup = () => {
    if (
      popupWindowRef.current &&
      !popupWindowRef.current.contains(event.target)
    ) {
      dispatch(setClosePopup());
    }
  };

  return (
    <div className={styles.popup} onClick={closePopup}>
      <section ref={popupWindowRef} className={styles.popup__window}>
        {children}
      </section>
    </div>
  );
};
export default Popup;
