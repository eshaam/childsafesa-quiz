import React, {useState} from "react";
import { QuizContext } from "../components/Contexts";
import Start from "../quiz/Start";
import Question from "../quiz/Question";
import End from "../quiz/End";

const Quiz = () => {
  const [counter, setCounter] = useState(100);
  const [questions, setQuestions] = useState();
  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);


  return (
    <section className='container'>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore, questions, setQuestions, counter, setCounter}}>
        {gameState === "start" && <Start/>}
        {gameState === "question" && <Question/>}
        {gameState === "end" && <End/>}
      </QuizContext.Provider>
    </section>
  );
};
export default Quiz;