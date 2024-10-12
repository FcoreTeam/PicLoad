import clsx from "clsx";

import styles from "./category.module.scss";

const Category = ({ image, name, type, typeBackground, loaded }) => {
  return (
    <div className={clsx(styles.category, styles[typeBackground])}>
      <div className={styles.bg__effect}></div>
      <div className={clsx(styles.image__background, styles[type])}>
        <img src={image} alt="" className={styles.category__img} />
      </div>
      <p className={styles.category__name}>{name}</p>
      <p className={styles.loaded__photos}>{loaded}</p>
    </div>
  );
};
export default Category;
