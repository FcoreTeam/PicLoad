import Categories from "./categories/Categories";
import Profile from "./profile/Profile";

import styles from "./main.module.scss";
import MemoryWarning from "../popups/memory-warning/Memory-warning";

const Main = ({ state }) => {
  return (
    <main className={styles.main__page}>
      {false && <MemoryWarning />}
      <Profile state={state.profilePage} />
      <Categories state={state.photoPage} />
    </main>
  );
};
export default Main;
