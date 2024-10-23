import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import Popup from "../Popup";

import styles from "./upload.module.scss";
import ImageUploading from "./ImageUploading";
import Button from "./../../../ui/button/Button";
import ImagePreview from "./ImagePreview";

const Upload = () => {
  const { title, popupEmoji, emojiBackground } = useSelector(
    (state) => state.popups
  );

  const [uploadedImages, setUploadedImages] = useState([]);

  return (
    <Popup>
      <div className={clsx(styles.emoji__wrapper, styles[emojiBackground])}>
        <img src={popupEmoji} alt="" />
      </div>
      <p className={styles.popup__title}>{title}</p>
      {uploadedImages.length === 0 && (
        <ImageUploading setUploadedImages={setUploadedImages} />
      )}
      {uploadedImages.length !== 0 && (
        <section className={styles.image__manager}>
          <p>Выбрано {uploadedImages.length} файла</p>
          {uploadedImages.map((el) => (
            <ImagePreview data={el} setUploadedImages={setUploadedImages} />
          ))}
          <Button text="Продолжить" componentStyle="close__button" />
        </section>
      )}
    </Popup>
  );
};

export default Upload;
