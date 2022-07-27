import React, { useState, Fragment } from "react";

const dummyData = [
  {
    id: 1,
    name: "銘謝惠顧",
    percent: 80,
  },
  {
    id: 2,
    name: "A 恭喜",
    percent: 15,
  },
  {
    id: 3,
    name: "AAAAA 恭喜",
    percent: 5,
  },
];

const Draw = () => {
  const [isClick, setIsClick] = useState(false);
  const [prize, setPrize] = useState("");
  const getRandomNumber = () => {
    let sortPrizes = dummyData.sort((a, b) => a.percent - b.percent);
    console.log(sortPrizes);
    let weightArray = sortPrizes.map((_, index) => {
      //利用 .map 做一個計數累加
      let count = 0;
      for (let i = 0; i <= index; i++) {
        count += sortPrizes[i].percent;
      }
      return count;
    });
    console.log("weightArray: ", weightArray);
    let random = Math.random() * weightArray[weightArray.length - 1];
    let index;
    for (let i = 0; i <= weightArray.length; i++) {
      if (weightArray[i] >= random) {
        index = i;
        break;
      }
    }
    console.log("random: ", random);
    console.log("index: ", index);
    return sortPrizes[index].name;
  };

  const buttonClick = () => {
    setIsClick(true);
    setPrize(getRandomNumber());
  };

  const resetButton = () => {
    setIsClick(false);
  };

  return (
    <React.Fragment>
      <button onClick={buttonClick}> 點我抽獎! </button>
      <button onClick={resetButton}> Reset !</button>
      {isClick && <p>{prize}</p>}
    </React.Fragment>
  );
};

export default Draw;
