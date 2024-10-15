import { useDispatch, useSelector } from "react-redux";
import styles from "./popup.module.scss";
import { setClosePopup } from "../../../store/slices/popupsSlice";
import { useEffect, useRef } from "react";
import useDisableBodyScroll from "../../../hooks/useDisableBodyScroll";
import {
  touchMoveClosePopup,
  touchMoveEndClosePopup,
} from "../../../helpers/helpers";

const Popup = ({ children }) => {
  useDisableBodyScroll();
  const dispatch = useDispatch();
  const popupWindowRef = useRef();

  const closePopupFunc = () => {
    dispatch(setClosePopup());
  };

  const closePopup = () => {
    if (
      popupWindowRef.current &&
      !popupWindowRef.current.contains(event.target)
    ) {
      popupWindowRef.current.style.bottom = "-50%";
      setTimeout(() => {
        closePopupFunc();
      }, 200);
    }
  };

  return (
    <div
      className={styles.popup}
      onClick={closePopup}
      onTouchMove={(e) =>
        touchMoveClosePopup(e, popupWindowRef, closePopupFunc)
      }
      onTouchEnd={(e) => touchMoveEndClosePopup(e, popupWindowRef)}
    >
      <section ref={popupWindowRef} className={styles.popup__window}>
        {children}
      </section>
    </div>
  );
};
export default Popup;
