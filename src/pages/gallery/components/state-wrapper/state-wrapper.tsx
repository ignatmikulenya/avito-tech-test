import React, { FC } from "react";

import "./state-wrapper.scss";

const StateWrapper: FC = ({ children }) => {
  return <div className="state-wrapper">{children}</div>;
};

export default StateWrapper;
