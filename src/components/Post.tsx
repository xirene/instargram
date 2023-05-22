/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

function Post() {
  const data = Array.from({ length: 66 }, (_, index) => index + 1);
  const startIndex = 0; // 시작 인덱스
  let [endIndex, setEndIndex] = useState(8); // 끝 인덱스
  const [fetching, setFetching] = useState(false);
  let [items, setItems] = useState(
    data.filter((_, index) => index >= startIndex && index <= endIndex)
  );
  function fetchMoreInstaFeeds() {
    if (data.length > endIndex) {
      setEndIndex(endIndex + 9);
      setFetching(true);
      setItems(
        data.filter((_, index) => index >= startIndex && index <= endIndex)
      );
      setTimeout(() => setFetching(false), 1000);
    } else {
      setEndIndex(data.length);
      setItems(
        data.filter((_, index) => index >= startIndex && index <= endIndex)
      );
      setFetching(true);
    }
  }
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      fetchMoreInstaFeeds();
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });
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
