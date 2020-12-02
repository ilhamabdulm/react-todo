import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { MainPage } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
