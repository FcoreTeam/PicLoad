import { NavLink } from "react-router-dom";
import clsx from "clsx";

import styles from "./profile.module.scss";

import storageImg from "../../../../img/icons/storage.svg";
import walletImg from "../../../../img/icons/wallet.svg";
import arrowToLeft from "../../../../img/icons/arrowToLeft.svg";
import arrowToRight from "../../../../img/icons/arrowToRight.svg";

const Profile = ({ state }) => {
  return (
    <>
      <div className={styles.profile__block}>
        <div className={styles.section__info}>
          <img src={storageImg} alt="" className={styles.section__img} />
        </div>
        <section className={styles.profile__section}>
          <p className={styles.section__name}>Использовано</p>
          <p className={styles.memory__block}>
            <span className={styles.memory__type}>GB {"  "}</span>
            <span className={styles.memory}>{state.memoryLeft}</span>
          </p>
          <NavLink to="/" className={styles.all__memory}>
            {" "}
            <img src={arrowToLeft} alt="" />
            из {state.memoryAll} GB
          </NavLink>
        </section>
        <div className={styles.circle__avatar}>
          <img src={state.avatar} alt="" className={styles.avatar} />
        </div>
        <section
          className={clsx(styles.profile__section, styles.balance__section)}
        >
          <p className={styles.section__name}>Заработано</p>
          <p className={styles.balance__block}>
            <span className={styles.balance}>{state.balance} </span>{" "}
            <span className={styles.balance__type}>₽</span>
          </p>
          <NavLink to="/" className={styles.withdraw}>
            Вывести <img src={arrowToRight} alt="" />
          </NavLink>
        </section>
        <div className={styles.section__info}>
          <img src={walletImg} alt="" className={styles.section__img} />
        </div>
      </div>
      <p className={styles.profile__name}>{state.name}</p>
      <p className={styles.profile__username}>{state.username}</p>
    </>
  );
};
export default Profile;
