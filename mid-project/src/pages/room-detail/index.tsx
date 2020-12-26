import React, { Fragment, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { RootState } from 'reducers';

import { Input } from 'antd';
import { Button } from 'antd';
import { CommentItem } from 'features/rooms/components/CommentItem';
import { addComment, removeComment } from 'features/rooms/models/roomsSlice';
import './room-detail.scss';
import { Comment } from 'features/rooms/types';
import { now } from 'lodash';

const { TextArea } = Input;

interface Props {}

const RoomDetailPage = (props: Props) => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state: RootState) => state.activeUser);
  const { rooms } = useSelector((state: RootState) => state.rooms);

  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const match = useRouteMatch<{ roomId: string }>();
  const room = rooms.find((room) => room.id === +match.params.roomId);

  const handleText = (event: any) => {
    setText(event.target.value);
  };

  if (room) {
    const handleAddComment = (event: any) => {
      const newComment: Comment = {
        id: 1,
        userId: activeUser.id,
        title,
        content: text,
      };
      dispatch(addComment(room.id, newComment));
      setText('');
      setTitle('');
    };

    const handleRemove = (userId: number, commentId: number) =>
      dispatch(removeComment({ id: room.id, commentId }));

    const { comments, like } = room;
    return (
      <div className="product-detail">
        <div className="product-detail__header">
          <h3 className="product-detail__title">{room.name}</h3>
        </div>
        <div className="product-detail__body">
          <div className="product-detail__image">
            <img src={room.imageUrl} alt="Room Image" />
          </div>
          <div className="product-detail__about">
            <h3 className="product-detail__name">{room.name}</h3>
            <p className="product-detail__description">{room.description}</p>
          </div>
        </div>
        <div className="product-detail__footer">
          <div className="comment">
            {comments.map((comment) => {
              return (
                <Fragment key={comment.id}>
                  <CommentItem
                    comment={comment}
                    userId={activeUser.id}
                    onRemove={handleRemove}
                  />
                </Fragment>
              );
            })}
            <div className="comment__form">
              <Input
                placeholder="Title of comment"
                value={title}
                onChange={(event: any) => setTitle(event.target.value)}
              />
              <TextArea
                value={text}
                rows={4}
                onChange={handleText}
                placeholder="Comment content"
                className="product-detail__textarea"
              />
              <Button type="primary" onClick={handleAddComment}>
                Submit Button
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>Loading</div>;
};

export default RoomDetailPage;
