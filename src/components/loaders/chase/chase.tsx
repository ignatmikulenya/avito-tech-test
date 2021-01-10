import React from "react";

import "./chase.scss";

type Props = {
  color?: string;
};

export default function Chase({ color = "black" }: Props) {
  const inlineStyles = `.chase__dot:before {
    background-color: ${color};
  }`;

  return (
    <div className="chase">
      <div className="chase__dot" />
      <div className="chase__dot" />
      <div className="chase__dot" />
      <div className="chase__dot" />
      <div className="chase__dot" />
      <div className="chase__dot" />
      <style>{inlineStyles}</style>
    </div>
  );
}
