import React from "react";

import { StateWrapper } from "../state-wrapper";

import "./error.scss";

type Props = {
  text: string;
};

export default function Error({ text }: Props) {
  return (
    <StateWrapper>
      <p className="error">{text}</p>
    </StateWrapper>
  );
}
