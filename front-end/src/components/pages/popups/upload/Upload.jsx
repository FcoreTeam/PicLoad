import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import Popup from "../Popup";

import styles from "./upload.module.scss";
import ImageUploading from "./ImageUploading";
import Button from "./../../../ui/button/Button";
import ImagePreview from "./ImagePreview";
import ImageManager from "./ImageManager";
import { getErrorMessage, sendImages } from "../../../../api/requests";
import {
  getRandomNumber,
  byteMegabyteGegabyte,
} from "../../../../helpers/helpers";
import ProgressBar from "./ProgressBar";
import { setPopupData } from "../../../../store/slices/popupsSlice";
import useFetchUserData from "../../../../hooks/useGetUserData";

const Upload = () => {
  const dispatch = useDispatch();
  const { title, popupEmoji, emojiBackground } = useSelector(
    (state) => state.popups
  );
  const { errorPercent } = useSelector((state) => state.user);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showProgress, setShowProgress] = useState(null);

  const sendImagesFunc = () => {
    const imagesArrayToSenc = uploadedImages.map((el) => ({
      size: byteMegabyteGegabyte(el.imageSize).toFixed(3),
      price: getRandomNumber(30, 100),
    }));
    const imagePriceSum = imagesArrayToSenc.reduce(
      (sum, item) => sum + item.price,
      0
    );
    sendImages(imagesArrayToSenc, title).then((res) => {
      setTimeout(() => {
        dispatch(
          setPopupData({
            isOpen: true,
            popupName: "warning",
            title: "Успешно ✅",
            text: `Ваши изображении были приняты. На ваш баланс было начислено ${imagePriceSum} ₽`,
            buttonText: "Закрыть",
            buttonTextDark: true,
          })
        );
        useFetchUserData();
      }, 8500);
    });
  };

  const checkAvailabilityUploadingImage = () => {
    if (Number(errorPercent) < 1) {
      sendImagesFunc();
    } else {
      const randomNumber = getRandomNumber(0, 100);
      if (randomNumber > errorPercent) {
        getErrorMessage().then((res) => {
          setTimeout(() => {
            dispatch(
              setPopupData({
                isOpen: true,
                popupName: "warning",
                title: "Отклонено ❌",
                text: "Ваше изображение не было принято по следующей причине:",
                rejectText: res.data.message,
                buttonText: "Закрыть",
                buttonTextDark: true,
              })
            );
          }, 8500);
        });
      } else {
        sendImagesFunc();
      }
    }
    setShowProgress(true);
  };

  return (
    <Popup>
      <div className={clsx(styles.emoji__wrapper, styles[emojiBackground])}>
        <img src={popupEmoji} alt="" />
      </div>
      <p className={styles.popup__title}>{title}</p>
      {uploadedImages.length === 0 && !showProgress && (
        <ImageUploading setUploadedImages={setUploadedImages} />
      )}
      {uploadedImages.length !== 0 && !showProgress && (
        <ImageManager
          uploadedImages={uploadedImages}
          setUploadedImages={setUploadedImages}
          checkAvailabilityUploadingImage={checkAvailabilityUploadingImage}
        />
      )}
      {showProgress && <ProgressBar />}
    </Popup>
  );
};

export default Upload;
