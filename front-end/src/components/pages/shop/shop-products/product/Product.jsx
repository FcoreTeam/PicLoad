import clsx from "clsx";

import styles from "./product.module.scss";

const Product = ({
  premiumProduct,
  productName,
  productDescription,
  productPrice,
}) => {
  return (
    <div
      className={clsx(
        styles.product,
        premiumProduct ? styles.premium__background : null
      )}
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
