import * as formik from "formik";

export function checkError<TForm>(
  errors: formik.FormikErrors<TForm>,
  name: string | string[]
): boolean {
  return !!formik.getIn(errors, name);
}

export function checkInputError<TForm>(
  touched: formik.FormikTouched<TForm>,
  errors: formik.FormikErrors<TForm>,
  name: string | string[]
): boolean {
  return checkError(errors, name) && !!formik.getIn(touched, name);
}

export function getHelperText<TForm>(
  errors: formik.FormikErrors<TForm>,
  name: string | string[],
  fallBack?: string
): string {
  const error = formik.getIn(errors, name);

  if (error) {
    return error;
  }

  return fallBack || "";
}

export function getInputHelperText<TForm>(
  touched: formik.FormikTouched<TForm>,
  errors: formik.FormikErrors<TForm>,
  name: string | string[],
  fallBack?: string
): string {
  const isTouched = formik.getIn(touched, name);

  if (isTouched) {
    return getHelperText<TForm>(errors, name, fallBack);
  }

  return fallBack || "";
}
