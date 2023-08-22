import React from "react";
import ReactDOM from "react-dom";

function CreationModal({ children }) {
  return ReactDOM.createPortal(
    <div className="creationModal">{children}</div>,
    document.getElementById("creationModal")
  );
}

export { CreationModal };
