import Categories from "./categories/Categories";
import Profile from "./profile/Profile";

import styles from "./main.module.scss";

const Main = () => {
  return (
    <main className={styles.main__page}>
      <Profile />
      <Categories />
    </main>
  );
};
export default Main;
