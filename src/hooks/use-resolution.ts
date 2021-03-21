import { useState, useEffect } from "react";
import { TABLET_PARTRAIT } from "../constants";
import { Resolution } from "../enums";

export const useResolution = () => {
  const [resolution, setResolution] = useState<Resolution>(Resolution.Desktop);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < TABLET_PARTRAIT) {
        setResolution(Resolution.Mobile);
      } else {
        setResolution(Resolution.Desktop);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return resolution;
};
