/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Post() {
  const items = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <div
        className="post-wrap"
        css={css`
          margin: 0 auto;
          padding-bottom: 120px;
          max-width: 520px;
        `}
      >
        <ul
          className="post"
          css={css`
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          `}
        >
          {items.map((item, index) => (
            <li
              key={index}
              css={css`
                width: 160px;
                height: 160px;
                border: 1px solid #000;
              `}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Post;
