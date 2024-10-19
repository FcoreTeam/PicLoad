import Popup from "../Popup";

import { useSelector } from "react-redux";
import clsx from "clsx";

import styles from "./upload.module.scss";

const Upload = () => {
  const { title, buttonText, popupEmoji, emojiBackground} = useSelector(
    (state) => state.popups
  );
  return (
    <Popup>
      <div className={clsx(styles.emoji__wrapper, styles[emojiBackground] )}>
        <img src={popupEmoji} alt="" />
      </div>
      <p className={styles.popup__title}>{title}</p>
      <section className={styles.popup__content}>
        <div className={styles.uploader}>
          
        </div>
      </section>
    </Popup>
  );
};
export default Upload;
