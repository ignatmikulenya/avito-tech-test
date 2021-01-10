import React, { CSSProperties } from "react";

import "./three-bounce.scss";

type Props = {
  color?: string;
};

export default function ThreeBounce({ color = "white" }: Props) {
  const inlineStyles: CSSProperties = {
    backgroundColor: color,
  };

  return (
    <div className="three-bounce">
      <div className="three-bounce__bounce first-bounce" style={inlineStyles} />
      <div
        className="three-bounce__bounce second-bounce"
        style={inlineStyles}
      />
      <div className="three-bounce__bounce" style={inlineStyles} />
    </div>
  );
}
