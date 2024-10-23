import { useRef, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";

import { byteMegabyteGegabyte } from "../../../../helpers/helpers";

import uploadIcon from "../../../../img/icons/uploadIcon.svg";

import styles from "./upload.module.scss";
import Button from "./../../../ui/button/Button";

const ImageUploading = ({ setUploadedImages }) => {
  const hiddenInputRef = useRef(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (incomingFiles) => {
      if (hiddenInputRef.current) {
        const dataTransfer = new DataTransfer();
        incomingFiles.forEach((file) => {
          dataTransfer.items.add(file);
        });
        hiddenInputRef.current.files = dataTransfer.files;
      }
      getImagesFromInput(incomingFiles);
    },
  });

  const getImagesFromInput = (fileArray) => {
    fileArray.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImages((prev) => [
          ...prev,
          {
            imageId: index,
            imageSrc: e.target.result,
            imageName: file.name,
            imageSize: byteMegabyteGegabyte(file.size),
          },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const openUploadWindow = (e) => { 
    e.stopPropagation()
    hiddenInputRef.current.click()
  }

  return (
    <section className={styles.popup__content}>
      <div
        {...getRootProps({ className: "dropzone" })}
        className={clsx(styles.uploader, isDragActive && styles.uploader__active)}
      >
        <img src={uploadIcon} alt="uploadIcon" />
        <div>Перетащите сюда файлы</div>
        <p>Или</p>
        <Button text="Выбрать с устройства" componentStyle="dark__button" onClick={openUploadWindow} />
        <input
          type="file"
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
          multiple
          accept="image/jpg, image/jpeg, image/png, image/webp"
          // onClick={(e) => e.stopPropagation()}
        />
        <input
          type="file"
          id="uploadImage"
          {...getInputProps()}
          multiple
          accept="image/jpg, image/jpeg, image/png, image/webp"
          // onClick={(e) => e.stopPropagation()}
        />
      </div>
    </section>
  );
};

export default ImageUploading;
