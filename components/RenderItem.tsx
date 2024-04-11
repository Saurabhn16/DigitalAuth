import { withTrackSignals } from "@preact-signals/safe-react/manual";
import { RenderBody } from "editorjs-comment";
import { signal } from "@preact-signals/safe-react";
import { Comment, CommentBlockData, CommentConfig } from './CommentTool';
import React from 'react';

interface Comment {
  commentBlockId: string;
  blockId: string;
  content: string
  //... your custom fields
}
interface RenderItemProps extends RenderBody {
    text: string; // Define text as a prop
  }
  
const RenderItem = ({
  commentBlockId,
  blockId,
  onClose,
  addCommentBlockData,
  text
}: RenderBody) => {
  const comments = signal<Comment[]>([]);
  const commentSignal = signal<Comment>(Object());

  commentSignal.value = {
    ...Object(),
    commentBlockId,
    blockId,
  };

  const data = (value: string) => {
    commentSignal.value = { ...commentSignal.value, content: value };
  };

  //save comment to DB
  const saveComment = () => {
    addContractCommentApi({
      ...commentSignal.value,
    }).then((respo) => {
      if (respo.length > 0) {
        const data = {
          id: respo[0].commentBlockId,
          count: respo.length,
        };

        if (addCommentBlockData) {
          addCommentBlockData(data);
        }
        comments.value = respo;
      }
    });
  };

  //The commentBlockId for the current  comment section is available  to be use to query the db, depending on your logic
  const getComments = () => {
    if (!commentBlockId) {
      comments.value = [];
      return;
    }
    getContractCommentByIdApi(commentBlockId)
      .then((respon) => {
        if (respon.length > 0) {
          addCommentBlockData({
            id: respon[0].commentBlockId,
            count: respon.length,
          });
          comments.value = respon;
        }
      })
      .catch((err) => {
        comments.value = [];
        console.log(err);
      });
  };
  getComments();

  const ShowComments = withTrackSignals(() => {
    return (
      <div>
        {comments.value.map((comment, index) => (
          <div key={index}></div>
        ))}
      </div>
    );
  });

  const closeEl = () => {
    if (!onClose) return;
    onClose();
  };

  return (
    <div
      style={{ zIndex: 3, position: "absolute" }}
      className="comment-popover"
      contentEditable={false}
    >
      <div style={{ textAlign: "right" }} onClick={closeEl}>
        <button text="Close" onClick={closeEl} />
      </div>
      <div style={{ margin: 10 }}>
        <div>{text.value}</div>
        <div>
          <InputField
            label="tesv"
            type="text"
            value={commentSignal.value.content}
            onChange={data}
          />
          <button text="Add comment" onClick={saveComment} />
        </div>
        <div>
          <ShowComments />
        </div>
      </div>
    </div>
  );
};

export default RenderItem;
