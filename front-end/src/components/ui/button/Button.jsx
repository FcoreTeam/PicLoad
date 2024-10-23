import styles from "./button.module.scss";

import clsx from "clsx";

const Button = ({ image, text, componentStyle, onClick = () => null }) => {
  return (
    <button className={clsx(styles[componentStyle])} onClick={onClick}>
      {!!image && <img src={image} alt="" className={styles.button__img} />}
      <p className={clsx(styles[componentStyle])}>{text}</p>
    </button>
  );
};
export default Button;
