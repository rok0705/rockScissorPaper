import React from "react";

const Box = (props) => {
  //   console.log(props);

  return (
    <div
      className={
        props.result == "win"
          ? "winbox"
          : props.result == "lose"
          ? "losebox"
          : "tiebox"
      }
    >
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src={props.mychoice && props.mychoice.img}
      ></img>
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
