import React from "react";
function ArrayMethods({
  pushArray,
  popArray,
  shiftArray,
  unShiftArray,
  toStringArray,
  getArrayLength,
  concatingArray,
  findIndexArray,
}) {
  return (
    <div className="array-method-buttons">
      <p>Array Methods :</p>
      <button className="btn" onClick={() => pushArray()}>
        Push{"()"}
      </button>
      <button className="btn" onClick={popArray}>
        Pop{"()"}
      </button>
      <button className="btn" onClick={shiftArray}>
        Shift{"()"}
      </button>
      <button className="btn" onClick={unShiftArray}>
        Unshift{"()"}
      </button>
      <button className="btn" onClick={toStringArray}>
        toString{"()"}
      </button>
      <button className="btn" onClick={getArrayLength}>
        Length
      </button>
      <button className="btn" onClick={concatingArray}>
        Concat{"()"}
      </button>
      <button className="btn" onClick={findIndexArray}>
        findIndex{"()"}
      </button>
    </div>
  );
}

export default ArrayMethods;
