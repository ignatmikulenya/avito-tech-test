import React from "react";

import { IComment } from "../../../../../../api-interfaces";

import "./comment.scss";

type Props = {
  comment: IComment;
};

export default function Comment({ comment }: Props) {
  return (
    <div className="comment">
      <p className="comment__date">
        {new Date(comment.date).toLocaleDateString("ru-RU")}
      </p>
      <p className="comment__text">{comment.text}</p>
    </div>
  );
}
