import React, { PropsWithChildren, ButtonHTMLAttributes } from "react";
import cn from "classnames";

import "./button.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  isLiquid?: boolean;
};

export default function Button({
  isLoading = false,
  isLiquid = false,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      {...props}
      className={cn("button", {
        "button--liquid": isLiquid,
      })}
    >
      {children}
    </button>
  );
}
