import styles from "./styles.module.css";
import { Card } from "../../../components";
import IC_DELETE from "../../../assets/ic_trash.svg";

export default function TodoCard(props) {
  const { data, handleChange, handleDelete } = props;

  return (
    <Card>
      <section className={styles.root}>
        <div>
          <input
            type="checkbox"
            checked={data.done}
            onChange={() => handleChange(data)}
          />
          <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        </div>
        <button
          type="button"
          className={styles["icon-button"]}
          onClick={() => handleDelete(data.id)}
        >
          <img src={IC_DELETE} alt="ic-trash" />
          <span>Remove</span>
        </button>
      </section>
    </Card>
  );
}
