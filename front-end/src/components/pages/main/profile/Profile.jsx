import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { useState, useEffect, memo } from "react";

import storageImg from "../../../../img/icons/storage.svg";
import walletImg from "../../../../img/icons/wallet.svg";
import arrowToLeft from "../../../../img/icons/arrowToLeft.svg";
import arrowToRight from "../../../../img/icons/arrowToRight.svg";
import styles from "./profile.module.scss";
import { getUserData } from "../../../../api/requests";
import { updateUserData } from "../../../../store/slices/userSlice";
import { getIdFromAddress } from "../../../../helpers/helpers";

const Profile = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  useEffect(() => {
    const tgId = getIdFromAddress();
    getUserData(tgId).then(
      ({
        data: {
          avatar_url,
          first_name,
          username,
          current_storage,
          max_storage,
          income,
        },
      }) => {
        dispatch(
          updateUserData({
            avatar: avatar_url,
            name: first_name,
            username: `@${username}`,
            income: parseFloat(income).toFixed(2),
            memoryUse: current_storage,
            memoryAll: max_storage,
          })
        );
      }
    );
  }, []);

  let { name, username, avatar, memoryAll, memoryUse, income } = useSelector(
    (state) => state.user
  );
  // income = parseFloat(data.income).toFixed(2);
  // name = data.first_name;
  // username = "@" + data.username;
  // memoryAll = data.max_storage;
  // memoryUse = data.current_storage;
  // const a = {
  //   data: {
  //     tg_id: "659350172",
  //     first_name: "Ash",
  //     username: "ashmuradyann",
  //     balance: "0.00",
  //     max_balance: "5000.00",
  //     from_ref_id: null,
  //     is_premium: false,
  //     current_storage: "0.00",
  //     max_storage: "1.00",
  //     income: "0.00",
  //     last_income_updated: "2024-10-16T21:57:42.314Z",
  //     size_pic: "[0,1000000)",
  //     pay_pic: "0.00",
  //     percent_error: "0.00",
  //     avatar_url:
  //       "https://api.telegram.org/file/bot6034759582:AAHngwWNrf3SZ9lnv48nMth2dc8nIchby38/photos/file_4.jpg",
  //     referrer_count: "0",
  //     quantity_of_pictures: "0",
  //   },
  //   status: 200,
  //   statusText: "OK",
  //   headers: {
  //     "content-length": "482",
  //     "content-type": "application/json; charset=utf-8",
  //   },
  //   config: {
  //     transitional: {
  //       silentJSONParsing: true,
  //       forcedJSONParsing: true,
  //       clarifyTimeoutError: false,
  //     },
  //     adapter: ["xhr", "http", "fetch"],
  //     transformRequest: [null],
  //     transformResponse: [null],
  //     timeout: 10000,
  //     xsrfCookieName: "XSRF-TOKEN",
  //     xsrfHeaderName: "X-XSRF-TOKEN",
  //     maxContentLength: -1,
  //     maxBodyLength: -1,
  //     env: {},
  //     headers: { Accept: "application/json, text/plain, */*" },
  //     baseURL: "https://api.example.com",
  //     method: "get",
  //     url: "http://localhost:3000/api/?tg_id=659350172",
  //   },
  //   request: {},
  // };

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
