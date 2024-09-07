import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AlertContainer() {
  const container = document.getElementById("alert-container");

  if (!container) {
    console.error('Target container for portal not found.');
    return null; // Or handle the error as needed
  }

  return (
    <>
      {ReactDOM.createPortal(
        <ToastContainer />,
        container
      )}
    </>
  );
}

export default AlertContainer;
