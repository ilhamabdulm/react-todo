import styles from "./styles.module.css";

export default function Header(props) {
  const { title, subtitle } = props;

  return (
    <header className={styles.root}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </header>
  );
}
