import React from "react";

function Backdrop({ show, clickBackdrop }) {
  let backdropStyle = show ? "backdrop show" : "backdrop";

  return <div className={backdropStyle} onClick={clickBackdrop}></div>;
}

export default Backdrop;
