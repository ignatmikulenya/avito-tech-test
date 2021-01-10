import React, { useCallback, useEffect } from "react";

import { IPreview } from "../../../../api-interfaces";

import { Button, Empty, Error, Loading } from "../../../../components";

import { imagesService } from "../../../../services";
import { useFetch } from "../../../../hooks";

import { RequestStatus } from "../../../../enums";

import { Comments } from "./comments";

type Props = {
  imageId: number;
};

export default function Preview({ imageId }: Props) {
  const memoService = useCallback(() => imagesService.getPreview(imageId), [
    imageId,
  ]);
  const [fetchPreview, status, preview, error] = useFetch<IPreview>(
    memoService
  );

  useEffect(() => {
    fetchPreview();
  }, [fetchPreview]);

  console.log(preview);

  const renderContent = () => {
    switch (status) {
      case RequestStatus.Loading:
        return <Loading />;
      case RequestStatus.Susscess:
        if (!preview) {
          return <Empty />;
        } else {
          return (
            <div className="preview">
              <div>
                <img
                  src={preview.url}
                  alt="Изображение галереи"
                  className="preview__image"
                />
                <Button isLiquid>Оставить комментарий</Button>
              </div>
              <Comments comments={preview.comments} />
            </div>
          );
        }
      case RequestStatus.Error:
        return <Error text={error.message} />;
      default:
        return <Empty />;
    }
  };

  return renderContent();
}
