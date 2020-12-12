import React, { useEffect } from "react";

import { IImage } from "../../api-interfaces";

import { Chase } from "../../components";

import { useFetch } from "../../hooks";
import { imagesService } from "../../services";

import { RequestStatus } from "../../enums";

import { Image, Empty } from "./components";

export default function Gallery() {
  const [fetchImages, status, images, error] = useFetch<IImage[]>(
    imagesService.getImages
  );

  useEffect(() => {
    fetchImages();
  }, []);

  const renderContent = () => {
    switch (status) {
      case RequestStatus.Loading:
        return <Chase />;
      case RequestStatus.Susscess:
        if (!images) {
          return <Empty />;
        } else {
          return (
            <div className="gallery">
              {images.map((image) => (
                <Image key={image.id} image={image} onClick={(image) => {}} />
              ))}
            </div>
          );
        }
      case RequestStatus.Error:
        if (!error) {
          return <p>NO IMAGES</p>;
        } else {
          return <p>{error.message}</p>;
        }
      default:
        return <p>NO IMAGES</p>;
    }
  };

  return;
  // return <div className="gallery">{renderContent()}</div>;
}
