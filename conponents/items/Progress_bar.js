import React from "react";

const Progress_bar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    position: "relative",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };
  const text_value = {
    fontSize: "12px",
    position: "absolute",
    top: "-15px;",
    right: "0",
  };

  return (
    <div style={Parentdiv}>
      <span style={text_value}>{progress}%</span>
      <div style={Childdiv}>
        <span style={progresstext} />
      </div>
    </div>
  );
};

export default Progress_bar;
