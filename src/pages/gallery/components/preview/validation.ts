import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Введите имя"),
  comment: yup.string().required("Введите комментарий"),
});
