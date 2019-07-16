import React from "react";

const Navigate = ({ onClick, postId, disabled }) => {
  return (
    <div>
      <button
        width="30px"
        height="30px"
        onClick={() => onClick("PREV")}
        disabled={disabled}
      >이전</button>
      <div>{postId}</div>
      <button
        width="30px"
        height="30px"
        onClick={() => onClick("NEXT")}
        disabled={disabled}
      >다음</button>
    </div>
  );
};

export default Navigate;
