import React, { useCallback, useEffect } from "react";
import { useFormik } from "formik";

import { IPreview } from "../../../../api-interfaces";

import { Button, Empty, Error, Loading, Input } from "../../../../components";

import { imagesService } from "../../../../services";
import { useFetch } from "../../../../hooks";
import { checkInputError, getInputHelperText } from "../../../../utils";

import { RequestStatus } from "../../../../enums";

import { Comments } from "./comments";
import { validationSchema } from "./validation";

type Props = {
  imageId: number;
};

export default function Preview({ imageId }: Props) {
  const memoFetchPreview = useCallback(
    () => imagesService.getPreview(imageId),
    [imageId]
  );

  const [
    fetchPreview,
    fetchPreviewStatus,
    preview,
    fetchPreviewError,
  ] = useFetch<IPreview>(memoFetchPreview);

  const form = useFormik({
    initialValues: {
      name: "",
      comment: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (preview) {
        preview.comments.push({
          id: Date.now(),
          date: Date.now(),
          text: values.comment,
        });
      }
    },
  });

  useEffect(() => {
    fetchPreview();
  }, [fetchPreview]);

  const renderContent = () => {
    switch (fetchPreviewStatus) {
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
                <form onSubmit={form.handleSubmit}>
                  <Input
                    name="name"
                    placeholder="Ваше имя"
                    value={form.values.name}
                    error={checkInputError(form.touched, form.errors, "name")}
                    helperText={getInputHelperText(
                      form.touched,
                      form.errors,
                      "name"
                    )}
                    onChange={form.handleChange}
                  />
                  <Input
                    name="comment"
                    placeholder="Ваш комментарий"
                    value={form.values.comment}
                    error={checkInputError(
                      form.touched,
                      form.errors,
                      "comment"
                    )}
                    helperText={getInputHelperText(
                      form.touched,
                      form.errors,
                      "comment"
                    )}
                    onChange={form.handleChange}
                  />
                  <Button isLiquid type="submit">
                    Оставить комментарий
                  </Button>
                </form>
              </div>
              <Comments comments={preview.comments} />
            </div>
          );
        }
      case RequestStatus.Error:
        return <Error text={fetchPreviewError.message} />;
      default:
        return <Empty />;
    }
  };

  return renderContent();
}
