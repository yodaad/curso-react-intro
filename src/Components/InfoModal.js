import React from "react";
import "../Styles/InfoModal.css";

function InfoModal({ closeModal }) {
  return (
    <div className="infoModal">
      <div className="infoModal-close">
        <button onClick={() => closeModal(false)}> X </button>
      </div>
      <p>
        This web app was developed by Diego Arango for you to log your different
        tasks. Enjoy!
      </p>
    </div>
  );
}

export { InfoModal };
