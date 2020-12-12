import React from "react";

import { IImage } from "../../../../api-interfaces";

import "./image.scss";

type Props = {
  image: IImage;
  onClick: (image: IImage) => void;
};

export default function Image({ image, onClick }: Props) {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <img
      src={image.url}
      alt="Изображение галлереи"
      onClick={handleClick}
      className="image"
    />
  );
}
