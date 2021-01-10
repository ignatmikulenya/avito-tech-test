import React from "react";

import { Wrapper } from "../wrapper";

import "./error.scss";

type Props = {
  text: string;
};

export default function Error({ text }: Props) {
  return (
    <Wrapper>
      <p className="error">{text}</p>
    </Wrapper>
  );
}
