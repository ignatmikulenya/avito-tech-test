import React from "react";

import "./header.scss";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
    </div>
  );
}
