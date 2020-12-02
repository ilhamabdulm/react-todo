import styles from "./styles.module.css";

export default function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}
