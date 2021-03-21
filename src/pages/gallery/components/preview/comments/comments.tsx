import React from "react";
import cn from "classnames";

import { IComment } from "../../../../../api-interfaces";

import { Comment } from "./comment";

import "./comments.scss";

type Props = {
  comments: IComment[];
  className?: string;
};

export default function Comments({ comments, className }: Props) {
  return (
    <div className={cn("comments", className)}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
