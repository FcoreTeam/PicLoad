import styles from "./main.module.scss";
import Profile from "./profile/Profile";

const Main = ({ state }) => {
  return (
    <main className={styles.main__page}>
      <Profile state={state.profilePage} />
    </main>
  );
};
export default Main;
