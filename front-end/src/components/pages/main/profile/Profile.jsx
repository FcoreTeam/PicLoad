import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { useState, useEffect } from "react";

import storageImg from "../../../../img/icons/storage.svg";
import walletImg from "../../../../img/icons/wallet.svg";
import arrowToLeft from "../../../../img/icons/arrowToLeft.svg";
import arrowToRight from "../../../../img/icons/arrowToRight.svg";
import styles from "./profile.module.scss";
import { getUserData } from "../../../../api/requests";
import { updateUserData } from "../../../../store/slices/userSlice";
import useFetchUserData from "../../../../hooks/useGetUserData";

const Profile = () => {
  const dispatch = useDispatch();

  useFetchUserData()

  let { name, username, avatar, memoryAll, memoryUse, income } = useSelector(
    (state) => state.user
  );

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
        <div
          className={clsx(
            styles.circle__avatar,
            !avatar && styles.circle__name
          )}
        >
          {!!avatar ? (
            <img src={avatar} alt="" className={styles.avatar} />
          ) : (
            <p>{name.slice(0, 1)}</p>
          )}
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
