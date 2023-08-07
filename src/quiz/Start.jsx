import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../components/Contexts';
import { Data } from '../components/Questions';

const Start = () => {
  //Shuffle questions array
  const shuffled = Data.sort(() => 0.5 - Math.random());

  //Take 10 random questions array
  let questionsArray = shuffled.slice(0, 10);

  const { questions, setQuestions } = useContext(QuizContext);
  const { gameState, setGameState } = useContext(QuizContext);
  const questionsLength = questionsArray.length;
  useEffect(() => {
    setQuestions(questionsArray);
  }, []);

  return (
    <section className='section container'>
      <h2>Test Your Child Safety Knowledge with Our Interactive Quiz</h2>
      <p>Welcome to our interactive Child Safety Quiz, designed to help you gauge your 
        understanding of important child safety measures. As parents, caregivers, or concerned individuals, 
        ensuring the safety and well-being of children is paramount. </p>
        <p>Ready to answer {questionsLength} questions?</p>
      <button onClick={() => { setGameState("question"); }} className="btn btn-primary">Start</button>
    </section>
  );
};
export default Start;