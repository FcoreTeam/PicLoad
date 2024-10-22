import { useDispatch } from "react-redux";
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

  useEffect(() => {
    const popupHeight = popupWindowRef.current.getBoundingClientRect().height;
    popupWindowRef.current.style.top = `calc(100vh - ${popupHeight}px - 79px)`;
  }, []);

  const closePopup = (e) => {
    if (popupWindowRef.current && !popupWindowRef.current.contains(e.target)) {
      popupWindowRef.current.style.transition = ".3s";
      popupWindowRef.current.style.top = "100vh";
      setTimeout(() => {
        closePopupFunc();
      }, 200);
    }
  };

  return (
    <div className={styles.popup} onClick={closePopup}>
      <section ref={popupWindowRef} className={styles.popup__window}>
        <div
          className={styles.popup__hand}
          onTouchMove={(e) => touchMoveClosePopup(e, popupWindowRef.current)}
          onTouchEnd={(e) =>
            touchMoveEndClosePopup(e, popupWindowRef.current, closePopupFunc)
          }
        ></div>
        {children}
      </section>
    </div>
  );
};

export default Popup;
