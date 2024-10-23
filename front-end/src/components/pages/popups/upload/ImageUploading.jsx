import { useState } from "react";
import styles from "./upload.module.scss";
import clsx from "clsx";

const ImageUploading = ({ setUploadedImages }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const getImagesFromInput = (fileArray) => {
    fileArray.forEach((el, i) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImages((prev) => [
          ...prev,
          {
            imageId: i,
            imageSrc: e.target.result,
            imageName: el.name,
            imageSize: el.size,
          },
        ]);
      };
      reader.readAsDataURL(el);
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      getImagesFromInput([...e.dataTransfer.files]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      getImagesFromInput([...e.target.files]);
    }
  };

  return (
    <section className={styles.popup__content}>
      <label
        htmlFor="uploadImage"
        className={clsx(styles.uploader, dragActive && styles.uploader__active)}
        onDragEnter={handleDrag}
      >
        <input
          type="file"
          id="uploadImage"
          multiple={true}
          onChange={handleChange}
          accept="image/jpg, image/jpeg, image/png, image/webp"
        />
        {dragActive && (
          <div
            className={styles.upload__area}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </label>
    </section>
  );
};

export default ImageUploading;
