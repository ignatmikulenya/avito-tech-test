import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<Props>) {
  return isOpen
    ? createPortal(
        <div className="modal-wrapper">
          <div aria-modal="true" className="modal">
            <button
              type="button"
              className="modal__close-button"
              onClick={onClose}
            ></button>
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
}
