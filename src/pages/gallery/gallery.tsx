import React, { useEffect } from "react";

import { IImage } from "../../api-interfaces";

import { useFetch, useModal } from "../../hooks";
import { imagesService } from "../../services";

import { RequestStatus } from "../../enums";

import { Modal } from "../../components";
import { Image, Empty, Error, Loading } from "./components";

export default function Gallery() {
  const [fetchImages, status, images, error] = useFetch<IImage[]>(
    imagesService.getImages
  );

  const [modalIsOpen, toggleModal] = useModal();

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
                    toggleModal();
                  }}
                />
              ))}
              <Modal isOpen={modalIsOpen} onClose={toggleModal}>
                <p>It's Modal</p>
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
