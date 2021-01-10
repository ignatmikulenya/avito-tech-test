import React, { FC } from "react";

import "./wrapper.scss";

const StateWrapper: FC = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default StateWrapper;
