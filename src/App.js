import React from "react";
import MyIntro from "./components/MyIntro";
import MyMbti from "./components/MyMbti";
import MyName from "./components/MyName";
import LikeImg from "./components/LikeImg";

const App = () => {
  const intro = "안녕하세요 풀스택6기 이지수입니다asdas.";
  const mbti = "ISFJ";
  const name = "이지수";
  const imgUrl =
    "https://image.news1.kr/system/photos/2012/5/15/142764/article.jpg/dims/optimize"; // 예시 이미지 URL
  const altText = "LikeImg";

  return (
    <div>
      <div className="box">
        <MyIntro intro={intro} />
      </div>
      <div className="box">
        <MyMbti mbti={mbti} />
      </div>
      <div className="box">
        <MyName name={name} />
      </div>
      <div className="box">
        <LikeImg likeImg={{ imgUrl, altText }} />
      </div>
    </div>
  );
};

export default App;
