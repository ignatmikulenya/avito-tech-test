import React from "react";

import "./footer.scss";

type Props = {
  text: string;
};

export default function Footer({ text }: Props) {
  return (
    <div className="footer">
      <p className="footer__text">&copy; {text}</p>
    </div>
  );
}
