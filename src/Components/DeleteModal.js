import React from "react";
import "../Styles/DeleteModal.css";

function DeleteModal({ closeModal, onDelete }) {
  return (
    <div className="deleteModalBackground">
      <div className="deleteModalContainer">
        <div className="deleteModalClose">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="deleteModalTitle">
          {" "}
          <h2>Do you want to delete the task?</h2>
        </div>
        <div className="deleteModalFooter">
          <button className="deleteModalYes" onClick={onDelete}>
            Yes
          </button>
          <button className="deleteModalNo" onClick={() => closeModal(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export { DeleteModal };
