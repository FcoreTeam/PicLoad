import clsx from "clsx";

import styles from "./product.module.scss";
import { useDispatch } from "react-redux";
import { setPopupData } from "../../../../../store/slices/popupsSlice";

const Product = ({
  premiumProduct,
  productName,
  productDescription,
  productPrice,
  productText
}) => {
  const dispatch = useDispatch();

  const openDetails = () => {
    dispatch(
      setPopupData({
        isOpen: true,
        popupName: "upgrade",
        title: productName,
        productPrice: productPrice,
        text: productText,
      })
    );
  };

  return (
    <div
      className={clsx(
        styles.product,
        premiumProduct ? styles.premium__background : null
      )}
      onClick={openDetails}
    >
      <div className={styles.product__text}>
        <p className={styles.product__name}>
          {premiumProduct ? "💎" : "📦"}{" "}
          <span className={premiumProduct ? styles.premium__title : null}>
            {productName}
          </span>
        </p>
        <p className={styles.product__description}>{productDescription}</p>
      </div>
      <p className={styles.product__price}>{productPrice}</p>
    </div>
  );
};
export default Product;
