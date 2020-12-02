import styles from "./styles.module.css";

export default function Button(props) {
  const { children, ...rest } = props;

  return (
    <button className={styles.root} {...rest}>
      {children}
    </button>
  );
}
