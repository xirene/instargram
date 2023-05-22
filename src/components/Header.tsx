/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Header() {
  const items = [1, 2, 3];
  return (
    <>
      <div
        className="header-wrap"
        css={css`
          width: 100%;
          height: 80px;
          border-bottom: 1px solid #000;
        `}
      >
        <div
          className="header"
          css={css`
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 100%;
          `}
        >
          <div className="header__logo-wrap">
            <h1>logo</h1>
          </div>
          <div className="header__search-wrap">
            <input placeholder="search" />
          </div>
          <div className="header__rnb-wrap">
            <ul
              css={css`
                display: flex;
                gap: 20px;
              `}
              className="header__rnb"
            >
              {items.map((item, index) => (
                <li
                  key={index}
                  css={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40px;
                    height: 40px;
                    border: 1px solid #000;
                  `}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
