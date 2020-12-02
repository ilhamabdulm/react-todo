import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Gap,
  Header,
  Layout,
  Spacer,
  TextInput,
  TodoCard,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { changeTodoList, createNewTodo } from "../../store/actions";
import { getStorageData, storeStorageData } from "../../utils/storage";
import { deleteTodo, editTodo } from "../../utils/helpers";

export default function Main() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { todoList } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    if (toastMessage) {
      setTimeout(() => {
        setToastMessage("");
      }, 3000);
    }
  }, [toastMessage]);

  useEffect(() => {
    const storageTodo = getStorageData("todos");
    if (storageTodo && storageTodo.length) {
      dispatch(changeTodoList(storageTodo));
    }
  }, []);

  useEffect(() => {
    storeStorageData("todos", todoList);
  }, [todoList]);

  const handleSubmitTodo = () => {
    if (!title) {
      setError("Title cannot be empty!");
    } else {
      const data = { id: uuidv4(), title, description, done: false };
      dispatch(createNewTodo(data));
      setTitle("");
      setDescription("");
      setToastMessage("Successfully create new todo!");
    }
  };

  const handleDeleteTodo = (id) => {
    const filteredList = deleteTodo(todoList, id);
    dispatch(changeTodoList(filteredList));
    setToastMessage("Successfully delete todo");
  };

  const handleChangeStatus = (todo) => {
    const newTodo = { ...todo, done: !todo.done };
    const newList = editTodo(todoList, newTodo);
    dispatch(changeTodoList(newList));
    storeStorageData("todos", newList);
    setToastMessage("Successfully edit todo status!");
  };

  return (
    <>
      {toastMessage ? <Toast message={toastMessage} /> : null}
      <Layout>
        <Header title="React Todo List" subtitle="Create your own todo list" />
        <section className={styles["form-container"]}>
          <TextInput
            label="What to do?"
            placeholder="Write what you are gonna do"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <p className={styles.error}>{error ? error : ""}</p>
          <Gap height="1rem" />
          <TextInput
            label="Add short description"
            placeholder="Write some description so you wont forget"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <Gap height="1rem" />
          <Button type="button" onClick={handleSubmitTodo}>
            Add Todo
          </Button>
        </section>
        <Spacer />
        <section>
          {todoList.length ? (
            todoList.map((todo) => (
              <TodoCard
                key={todo.id}
                data={todo}
                handleChange={handleChangeStatus}
                handleDelete={handleDeleteTodo}
              />
            ))
          ) : (
            <p className={styles.warning}>
              You dont have any todo, please create one above!
            </p>
          )}
        </section>
      </Layout>
    </>
  );
}

const Toast = ({ message }) => {
  return (
    <div className={styles["toast-container"]}>
      <div className={styles["toast-content"]}>{message}</div>
    </div>
  );
};
