import { DeleteOutlined } from '@ant-design/icons';
import { User } from 'features/auth/types';
import React from 'react';
import { Comment } from '../types';
import './rooms.scss';

interface Props {
  userId: number;
  comment: Comment;
  onRemove: (userId: number, commentId: number) => void;
}

export const CommentItem = ({ comment, onRemove, userId }: Props) => {
  return (
    <div className="comment">
      <div className="comment__header">
        <DeleteOutlined onClick={() => onRemove(userId, comment.id)} />
      </div>
      <p className="comment__name">{comment.title}</p>
      <p className="comment__content">{comment.content}</p>
    </div>
  );
};
