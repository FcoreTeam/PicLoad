import Product from "./product/Product";
import styles from "./shop-products.module.scss";

const ShopProducts = ({
  categoryName,
  categoryDescription,
  premiumCategory,
}) => {
  return (
    <>
      {premiumCategory && (
        <section className={styles.category}>
          <p className={styles.section__name}>{categoryName}</p>
          <p className={styles.section__description}>{categoryDescription}</p>
          <div className={styles.products}>
            <Product
              premiumProduct={true}
              productName="Premium"
              productDescription="Вывод средств, ускоренная загрузка, увеличенно..."
              productPrice="399 ₽"
            />
          </div>
          <div className={styles.line}></div>
        </section>
      )}
      {premiumCategory && (
        <section className={styles.category}>
          <p className={styles.section__name}>{categoryName}</p>
          <p className={styles.section__description}>{categoryDescription}</p>
          <div className={styles.products}>
            <Product
              premiumProduct={false}
              productName="Хранилище 1 GB"
              productDescription="Храните больше изображений"
              productPrice="149 ₽"
            />
            <Product
              premiumProduct={false}
              productName="Хранилище 3 GB"
              productDescription="Храните больше изображений"
              productPrice="279 ₽"
            />
          </div>
          <div className={styles.line}></div>
        </section>
      )}
    </>
  );
};
export default ShopProducts;
