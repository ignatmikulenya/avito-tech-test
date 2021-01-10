import { IImage } from "./image";
import { IComment } from "./comment";

export interface IPreview extends IImage {
  comments: IComment[];
}
