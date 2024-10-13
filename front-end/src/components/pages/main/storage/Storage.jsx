import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { countMemoryPercent } from "../../../../store/utils/mainUtils";
import { updatePercent } from "../../../../store/slices/userSlice";

import { NavLink } from "react-router-dom";

import styles from "./storage.module.scss";
import { useEffect } from "react";

const Storage = () => {
  const dispatch = useDispatch();
  const { memoryPercent, memoryAll, memoryUse } = useSelector(
    (state) => state.user
  );

  const updatePercentUi = () => dispatch(updatePercent(countMemoryPercent(memoryAll, memoryUse)));

  useEffect(() => {
    updatePercentUi()
  }, []);

  return (
    <section className={styles.storage__section}>
      <p className={styles.section__name}>Ваше хранилище 💾</p>
      <p className={styles.section__description}>
        Проверьте доступность хранения фотографий
      </p>
      <div className={styles.progress__bar}>
        <div className={styles.progress} style={{ width: `${memoryPercent}%` }}>
          <p className={styles.memory__percent}>{memoryPercent} %</p>
        </div>
      </div>
      <div className={styles.other__info}>
        <div className={styles.other__memory__info}>
          <p className={styles.memory__info}>
            Занято <span>{memoryUse} GB</span> из <span>{memoryAll} GB</span>
          </p>
        </div>
        <NavLink to="/" className={styles.upgrade__button}>
          Улучшить
        </NavLink>
      </div>
    </section>
  );
};
export default Storage;
