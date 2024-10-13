import Profile from "./profile/Profile";
import Categories from "./categories/Categories";
import Storage from "./storage/Storage";
import Wallet from "./wallet/Wallet";
import Promocode from "./promocode/Promocode";

import styles from "./main.module.scss";

const Main = () => {
  return (
    <main className={styles.main__page}>
      <Profile />
      <Categories />
      <Storage />
      <Wallet />
      <Promocode />
    </main>
  );
};
export default Main;
