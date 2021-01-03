import { useState, useCallback } from "react";

type TUseModalOutput = [boolean, () => void];

export const useModal = (): TUseModalOutput => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return [isOpen, toggleIsOpen];
};
