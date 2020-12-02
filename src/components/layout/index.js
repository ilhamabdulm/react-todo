import styles from "./styles.module.css";

export default function Layout({ children }) {
  return (
    <main className={styles.root}>
      <section className={styles.container}>{children}</section>
    </main>
  );
}
