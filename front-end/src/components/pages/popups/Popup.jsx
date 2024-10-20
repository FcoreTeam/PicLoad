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

  useEffect(() => {
    popupWindowRef.current.style.top = `calc(100vh - ${
      popupWindowRef.current.getBoundingClientRect().height
    }px - 79px)`;
  }, []);

  const closePopup = () => {
    if (
      popupWindowRef.current &&
      !popupWindowRef.current.contains(event.target)
    ) {
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
          onTouchMove={(e) =>
            touchMoveClosePopup(e, popupWindowRef.current, closePopupFunc)
          }
          onTouchEnd={(e) => touchMoveEndClosePopup(e, popupWindowRef.current)}
        ></div>
        {children}
      </section>
    </div>
  );
};
export default Popup;
