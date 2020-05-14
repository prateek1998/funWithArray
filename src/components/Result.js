import React from "react";

function Result({ resultArr, resultString }) {
  return (
    <div className="result-comp">
      <h3>Result :</h3>
      <div>
        {resultArr !== null
          ? resultArr.map((arr, index) => {
              if (arr !== "") {
                return (
                  <div key={index} className="blockBadge">
                    {arr}
                  </div>
                );
              } else {
                return null;
              }
            })
          : "try to click one of those methods above"}
      </div>
      <div style={{ margin: "1em" }}>{resultString ? resultString : null}</div>
    </div>
  );
}

export default Result;
