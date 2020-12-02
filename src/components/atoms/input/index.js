import styles from "./styles.module.css";

export default function TextInput(props) {
  const { label, ...rest } = props;

  return (
    <label className={styles.root}>
      {label}
      <input type="text" {...rest} />
    </label>
  );
}
