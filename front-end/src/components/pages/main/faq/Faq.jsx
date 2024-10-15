import Question from "./question/Question";

import styles from "./faq.module.scss";

const Faq = () => {
  return (
    <section className={styles.faq__section}>
      <p className={styles.section__name}>Часто задаваемые вопросы ☎️</p>
      <p className={styles.section__description}>
        Найдите для себя решение задач
      </p>
      <div className={styles.questions}>
        <Question
          question={
            <span>
              Как <span className={styles.withdraw}>вывести</span> средства
            </span>
          }
        />
      </div>
    </section>
  );
};
export default Faq;
