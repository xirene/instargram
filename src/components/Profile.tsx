/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Profile() {
  return (
    <>
      <div
        className="profile-wrap"
        css={css`
          padding: 120px;
        `}
      >
        <div
          className="profile"
          css={css`
            display: flex;
            justify-content: center;
            gap: 120px;
          `}
        >
          <div
            className="profile-image"
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              width: 120px;
              height: 120px;
              border: 1px solid #000;
              border-radius: 50%;
            `}
          >
            img
          </div>
          <div className="profile-info">
            <div
              className="profile-name"
              css={css`
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 12px;
              `}
            >
              <h3>name</h3>
              <button
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: 4px;
                  font-size: 12px;
                  border: 1px solid #000;
                `}
              >
                팔로잉
              </button>
              <button
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: 4px;
                  font-size: 12px;
                  border: 1px solid #000;
                `}
              >
                ▽
              </button>
            </div>
            <div
              className="profile-board"
              css={css`
                display: flex;
                gap: 12px;
                margin-bottom: 12px;
              `}
            >
              <p>
                게시물{" "}
                <span
                  css={css`
                    font-weight: bold;
                  `}
                >
                  1,551
                </span>
              </p>
              <p>
                팔로워{" "}
                <span
                  css={css`
                    font-weight: bold;
                  `}
                >
                  63.2천
                </span>
              </p>
              <p>
                팔로우{" "}
                <span
                  css={css`
                    font-weight: bold;
                  `}
                >
                  182
                </span>
              </p>
            </div>
            <div
              className="profile-etc"
              css={css`
                display: flex;
                flex-direction: column;
                gap: 8px;
              `}
            >
              <p>이름</p>
              <p>hash tag</p>
              <p>description</p>
              <p>icon</p>
              <p>test link</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
