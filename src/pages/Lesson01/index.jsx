import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md?raw";

const convertData = (input) => {
  return input.map(([name, count]) => ({ // アロー関数でアブジェクトを返すときの表記
    name, // オブジェクトの省略表記
    count,
  }));
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer01"
      convertData={convertData}
      dataUrl="data/chs-capacity.json"
      instruction={instruction}
      title="Lesson 01"
      Chart={Chart}
    />
  );
};

export default Lesson;
