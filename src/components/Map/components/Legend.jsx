import React from "react";

const Legend = ({ legendItems }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {legendItems.map((item) => (
        <div
          key={item.title}
          style={{
            backgroundColor: item.color,
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: item.textColor != null ? item.textColor : "black",
            fontWeight: "bolder",
            fontSize: "1em",
            height: "60px",
            textAlign: "center",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
