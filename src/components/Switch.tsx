/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Switch() {
  return (
    <>
      <div
        className="switch-wrap"
        css={css`
          width: 100%;
          border-top: 1px solid #ccc;
        `}
      >
        <div
          className="switch"
          css={css`
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-top: -1px;
          `}
        >
          <button
            css={css`
              width: 80px;
              border-top: 3px solid #999;
              padding: 12px;
            `}
          >
            게시물
          </button>
          <button
            css={css`
              width: 80px;
              border-top: 3px solid #999;
              padding: 12px;
            `}
          >
            태그됨
          </button>
        </div>
      </div>
    </>
  );
}
export default Switch;
