import React from "react";
import ReactDOM from "react-dom";
import "../Styles/CreationModal.css";

function CreationModal({ children }) {
  return ReactDOM.createPortal(
    <div className="creationModalBackground">
      <div className="creationModal"> {children}</div>
    </div>,
    document.getElementById("creationModal")
  );
}

export { CreationModal };
