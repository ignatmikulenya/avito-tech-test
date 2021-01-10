import { createContext } from "react";

import { Resolution } from "../enums";

export const ResolutionContext = createContext<Resolution>(Resolution.Laptop);
