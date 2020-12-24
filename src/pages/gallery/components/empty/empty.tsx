import React from "react";

import { StateWrapper } from "../state-wrapper";

import "./empty.scss";

export default function Empty() {
  return (
    <StateWrapper>
      <p className="empty">NO IMAGES</p>
    </StateWrapper>
  );
}
