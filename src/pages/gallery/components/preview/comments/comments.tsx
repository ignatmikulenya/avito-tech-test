import React from "react";

import { IComment } from "../../../../../api-interfaces";

import { Comment } from "./comment";

import "./comments.scss";

type Props = {
  comments: IComment[];
};

export default function Comments({ comments }: Props) {
  return (
    <div className="comments">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
