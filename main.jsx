import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Store/store.js"; // Adjust the path if necessary
import AlertContainer from "./Components/UI/AlertContainer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <AlertContainer/>
  </Provider>
);
