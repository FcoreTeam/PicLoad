import { useState, useEffect } from "react";
import { getRandomNumber } from "../../../../helpers/helpers";

import styles from "./upload.module.scss";

const ProgressBar = () => {
  const generateRandomNumbers = () => {
    let num1 = getRandomNumber(1, 33);
    let num2 = getRandomNumber(34, 66);
    let num3 = getRandomNumber(67, 99);
    return [1, num1, num2, num3, 100].sort((a, b) => a - b);
  };

  const [progressValues, setProgressValues] = useState(generateRandomNumbers);
  const [currentProgress, setCurrentProgress] = useState(1); // Начало с 1
  const [targetProgress, setTargetProgress] = useState(progressValues[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newTarget = progressValues[index];
    if (newTarget > currentProgress) {
      setTargetProgress(newTarget);
    }
  }, [index, progressValues, currentProgress]);

  useEffect(() => {
    const smoothTransition = setInterval(() => {
      setCurrentProgress((prevProgress) => {
        if (prevProgress < targetProgress) {
          return Math.min(prevProgress + 1, targetProgress);
        }
        return prevProgress;
      });
    }, 30);

    return () => clearInterval(smoothTransition);
  }, [targetProgress]);

  return (
    <div className={styles.progress__wrapper}>
      <p>{currentProgress}%</p>
      <div className={styles.progress__container}>
        <div
          className={styles.progress__bar}
          style={{ width: `${currentProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
