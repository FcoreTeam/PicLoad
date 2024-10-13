import styles from "./faq.module.scss";

const Faq = () => {
  return (
    <section className={styles.faq__section}>
      <p className={styles.section__name}>Часто задаваемые вопросы ☎️</p>
      <p className={styles.section__description}>
        Найдите для себя решение задач
      </p>
    </section>
  );
};
export default Faq;
