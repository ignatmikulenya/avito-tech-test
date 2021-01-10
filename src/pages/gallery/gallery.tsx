import React, { useEffect, useState } from "react";

import { IImage } from "../../api-interfaces";

import { useFetch, useModal } from "../../hooks";
import { imagesService } from "../../services";

import { RequestStatus } from "../../enums";

import { Modal, Error, Empty, Loading } from "../../components";
import { Image, Preview } from "./components";

export default function Gallery() {
  const [fetchImages, status, images, error] = useFetch<IImage[]>(
    imagesService.getImages
  );

  const [modalIsOpen, toggleModal] = useModal();

  const [selectedImageId, setImageId] = useState<number | null>(null);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const renderContent = () => {
    switch (status) {
      case RequestStatus.Loading:
        return <Loading />;
      case RequestStatus.Susscess:
        if (!images) {
          return <Empty />;
        } else {
          return (
            <div className="gallery__photos">
              {images.map((image) => (
                <Image
                  key={image.id}
                  image={image}
                  onClick={(image) => {
                    setImageId(image.id);
                    toggleModal();
                  }}
                />
              ))}
              <Modal isOpen={modalIsOpen} onClose={toggleModal}>
                {selectedImageId !== null && (
                  <Preview imageId={selectedImageId}></Preview>
                )}
              </Modal>
            </div>
          );
        }
      case RequestStatus.Error:
        return <Error text={error.message} />;
      default:
        return <Empty />;
    }
  };

  return <div className="gallery">{renderContent()}</div>;
}
