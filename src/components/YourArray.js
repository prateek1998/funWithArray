import React from "react";

function YourArray({ ShowArray }) {
  return (
    <div className="YourArrayBlock">
      <p>Your Array:</p>
      <div className="block">
        {ShowArray.length !== 0
          ? ShowArray.map((arr, index) => {
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
          : "Write something on input form"}
      </div>
    </div>
  );
}
export default YourArray;
