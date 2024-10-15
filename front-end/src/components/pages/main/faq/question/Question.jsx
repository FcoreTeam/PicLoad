import openQuestion from "../../../../../img/icons/openArrow.svg";

import styles from "./question.module.scss";

const Question = ({ question }) => {
  return (
    <section className={styles.question}>
      <p className={styles.question__name}>{question}</p>
      <img src={openQuestion} alt="" className={styles.open__question} />
    </section>
  );
};
export default Question;
