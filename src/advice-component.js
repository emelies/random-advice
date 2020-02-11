import React, { useState } from "react";

function AdviceComponent() {
  const [advice, onChangeAdvice] = useState();
  React.useEffect(() => {
    if (advice) {
      return;
    }

    fetch("https://api.adviceslip.com/advice") // fetching the data
      .then(res => res.json()) // turn response into JSON
      .then(data => {
        const randomAdvice = data.slip.advice; // declaring var to store the specific data we want. in this case - advice from API

        onChangeAdvice(randomAdvice); // onChange tells the computer to update advice from the const outside the useEffect. and inside onChange tells what to update advice with.
      }); // what data and what within the data to update. in this ex its ADVICE from the const, outside the useEffect
  });

  return (
    <div className="advice-box">
      <div className="advice-text">{advice}</div>
      {/* <button onClick={}>refresh advice</button> */}
    </div>
  );
}

export default AdviceComponent;
