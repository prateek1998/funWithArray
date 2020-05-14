import React from "react";

function Modal({
  show,
  type,
  modalValue,
  handleModalInputChange,
  btnModalHandler,
}) {
  let modalStyle = show ? "modal show" : "modal";
  let modalContent = "";
  switch (type.toLowerCase()) {
    case "concat":
      modalContent =
        "Allows you to join two arrays. Make sure you separate elements with commas";
      break;
    case "findindex":
      modalContent = "Allows you to find index number of particular elements";
      break;
    case "unshift":
      modalContent = "Add a new item into the first index of array";
      break;
    case "push":
      modalContent = "Add a new item to an array";
      break;
    default:
      modalContent = "Hello World";
  }
  return (
    <div className={modalStyle}>
      <h3 className="modal__title">{type}</h3>
      <hr></hr>
      <p>
        {type} : {modalContent}
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          btnModalHandler();
          document.getElementById("modal-input").blur();
        }}
      >
        <input
          id="modal-input"
          type="text"
          placeholder="type an element"
          value={modalValue}
          onChange={handleModalInputChange}
        />
        <button type="submit" className="btn-modal">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Modal;
