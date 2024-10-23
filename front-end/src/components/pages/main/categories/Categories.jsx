import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Category from "./category/Category";

import { setPopupData } from "../../../../store/slices/popupsSlice";
import { getUserCategoryData } from "../../../../api/requests";
import {
  checkMemory,
  countMemoryPercent,
  sortCategoriesData,
} from "../../../../helpers/helpers";

import styles from "./categories.module.scss";

const Categories = () => {
  const dispatch = useDispatch();
  const { memoryAll, memoryUse } = useSelector((state) => state.user);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    getUserCategoryData().then((res) => {
      const categoryArray = sortCategoriesData(res.data);
      setCategoriesData(categoryArray);
    });
  }, []);

  const showPopup = (popupEmoji, emojiBackground) => {
    if (countMemoryPercent(memoryAll, memoryUse) < 5) {
      dispatch(
        setPopupData({
          isOpen: true,
          popupName: "warning",
          title: "Внимание ⚠️",
          text: "Ваше хранилище почти заполнено! Вы можете увеличить его размер в магазине.",
          buttonText: "Закрыть",
          buttonTextDark: true,
          linkText: "Увеличить",
        })
      );
    } else {
      dispatch(
        setPopupData({
          isOpen: true,
          popupName: "upload",
          popupEmoji: popupEmoji,
          title: "Загрузка медиа",
          buttonText: "Закрыть",
          emojiBackground: emojiBackground,
        })
      );
    }
  };

  return (
    <section className={styles.categories__section}>
      <p className={styles.categories__title}>Загрузите фото 🔥</p>
      <div className={styles.categories__subinfo}>
        <p className={styles.categories__description}>
          Выберите категорию для загрузки
        </p>
      </div>
      <section className={styles.categories}>
        {categoriesData.map(
          ({ image, name, type, typeBackground, loaded }, i) => (
            <Category
              key={i}
              image={image}
              name={name}
              type={type}
              typeBackground={typeBackground}
              loaded={loaded}
              onClick={() => showPopup(image, type)}
            />
          )
        )}
      </section>
    </section>
  );
};
export default Categories;
