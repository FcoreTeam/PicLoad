import { useSelector } from "react-redux";

import styles from "./categories.module.scss";

import Category from "./category/Category";
import natureImg from "../../../../img/icons/nature.svg";
import architectImg from "../../../../img/icons/architect.svg";
import sportImg from "../../../../img/icons/sport.svg";
import eatImg from "../../../../img/icons/food.svg";
import adventureImg from "../../../../img/icons/adventure.svg";

const Categories = () => {
  const {
    naturePhotos,
    architecturePhotos,
    foodPhotos,
    sportPhotos,
    travelPhotos,
  } = useSelector((state) => state.photos);
  return (
    <>
      <p className={styles.categories__title}>Загрузите фото 🔥</p>
      <div className={styles.categories__subinfo}>
        <p className={styles.categories__description}>
          Выберите категорию для загрузки
        </p>
      </div>
      <section className={styles.categories}>
        <Category
          image={natureImg}
          name="Природа"
          type="nature"
          typeBackground="nature__bg"
          loaded={`${naturePhotos} загружено`}
        />
        <Category
          image={architectImg}
          name="Архитектура"
          type="architect"
          typeBackground="architect__bg"
          loaded={`${architecturePhotos} загружено`}
        />
        <Category
          image={sportImg}
          name="Спорт"
          type="sport"
          typeBackground="sport__bg"
          loaded={`${foodPhotos} загружено`}
        />
        <Category
          image={eatImg}
          name="Еда"
          type="eat"
          typeBackground="eat__bg"
          loaded={`${sportPhotos} загружено`}
        />
        <Category
          image={adventureImg}
          name="Путешествия"
          type="adventure"
          typeBackground="adventure__bg"
          loaded={`${travelPhotos} загружено`}
        />
      </section>
    </>
  );
};
export default Categories;
