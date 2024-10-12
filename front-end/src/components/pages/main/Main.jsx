import Categories from "./categories/Categories";
import Profile from "./profile/Profile";
import Storage from "./storage/Storage";

import styles from "./main.module.scss";
import Wallet from "./wallet/Wallet";

const Main = () => {
  return (
    <main className={styles.main__page}>
      <Profile />
      <Categories />
      <Storage />
      <Wallet />
    </main>
  );
};
export default Main;
