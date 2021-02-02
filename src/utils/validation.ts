import { getIn } from "formik";
import type { FormikErrors, FormikTouched } from "formik";

export function checkError<TForm>(
  errors: FormikErrors<TForm>,
  name: string | string[]
): boolean {
  return !!getIn(errors, name);
}

export function checkInputError<TForm>(
  touched: FormikTouched<TForm>,
  errors: FormikErrors<TForm>,
  name: string | string[]
): boolean {
  return checkError(errors, name) && !!getIn(touched, name);
}

export function getHelperText<TForm>(
  errors: FormikErrors<TForm>,
  name: string | string[],
  fallBack?: string
): string {
  const error = getIn(errors, name);

  if (error) {
    return error;
  }

  return fallBack || "";
}

export function getInputHelperText<TForm>(
  touched: FormikTouched<TForm>,
  errors: FormikErrors<TForm>,
  name: string | string[],
  fallBack?: string
): string {
  const isTouched = getIn(touched, name);

  if (isTouched) {
    return getHelperText<TForm>(errors, name, fallBack);
  }

  return fallBack || "";
}
