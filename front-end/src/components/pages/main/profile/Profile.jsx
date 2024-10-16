import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { useState, useEffect, memo } from "react";

import storageImg from "../../../../img/icons/storage.svg";
import walletImg from "../../../../img/icons/wallet.svg";
import arrowToLeft from "../../../../img/icons/arrowToLeft.svg";
import arrowToRight from "../../../../img/icons/arrowToRight.svg";
import styles from "./profile.module.scss";

const Profile = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/?tg_id=${new URLSearchParams(window.location.search).get("tg_id")}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  let { name, username, avatar, memoryAll, memoryUse, income } =
    useSelector((state) => state.user);
    income = parseFloat(data.income).toFixed(2);
    name = data.first_name;
    username = "@"+data.username;
    memoryAll = data.max_storage;
    memoryUse = data.current_storage;


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
            <span className={styles.memory}>{memoryUse}</span>
          </p>
          <NavLink to="/" className={styles.all__memory}>
            {" "}
            <img src={arrowToLeft} alt="" />
            из {memoryAll} GB
          </NavLink>
        </section>
        <div className={styles.circle__avatar}>
          <img src={avatar} alt="" className={styles.avatar} />
        </div>
        <section
          className={clsx(styles.profile__section, styles.balance__section)}
        >
          <p className={styles.section__name}>Заработано</p>
          <p className={styles.balance__block}>
            <span className={styles.balance}>{income} </span>{" "}
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
      <p className={styles.profile__name}>{name}</p>
      <p className={styles.profile__username}>{username}</p>
    </>
  );
};
export default Profile;

