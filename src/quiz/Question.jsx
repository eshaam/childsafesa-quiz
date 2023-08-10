import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from '../components/Contexts';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Question = () => {
  
  const { questions } = useContext(QuizContext);
  const { setGameState } = useContext(QuizContext);
  const { counter, setCounter } = useContext(QuizContext);
  const { score, setScore } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [questionCounter, setQuestionCounter] = useState(1);

  const answerButtons = ['btn-a', 'btn-b', 'btn-c', 'btn-d'];
  const correctAnswerClass = 'btn-outline-success';
  const incorrectAnswerClass = 'btn-outline-danger';
  const maxNumOfQuestions = 10;

  const SelectAnswer = (option) => {
    setOptionChosen(option);
    
    if(questions[currQuestion].answer === option){
      //If user has selected the correct answer inscrement score and outline
      setScore(score + 1);
      document.getElementById('btn-' + option).classList.add(correctAnswerClass)
    }else {
      //Otherwise outline it was the wrong answer and outline the correct one
      document.getElementById('btn-' + option).classList.add(incorrectAnswerClass)
      document.getElementById('btn-' + questions[currQuestion].answer).classList.add(correctAnswerClass)
    }
  }

  const nextQuestion = () => {
    setOptionChosen("");

    answerButtons.forEach((btn)=>{
      //before moving to next question clear the styling to default
      document.getElementById(btn).classList.remove(incorrectAnswerClass)
      document.getElementById(btn).classList.remove(correctAnswerClass)
    })
 
    setCurrQuestion(currQuestion + 1);
    setQuestionCounter(questionCounter + 1);
    if(currQuestion === maxNumOfQuestions - 1) {
      setGameState("end");
    }
  }

  useEffect( () => {
    if (optionChosen === "") {
      document.getElementById('nextBtn').setAttribute("disabled", "disabled");
    } else {
      document.getElementById('nextBtn').removeAttribute("disabled", "disabled");
    }

    //Decrease the counter from 100 every 1 sec until 0 so 100 seconds to complete quiz
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    if (counter === 0) {
      setGameState("end");
    }
    return () => clearInterval(timer);
  }, [counter, optionChosen, setCounter, setGameState])


  return (
    <section className='section container'>
      <div className="row">
        <div className="col-sm-12">
          <ProgressBar animated variant="primary" now={counter} />
        </div>
      </div>
      
      {/* Question */}
      <div className="row">
        <div className="col-sm-12 py-2">
           <h2 className='display-5'>Question {questionCounter} : {questions[currQuestion].question}</h2>

        </div>
      </div>

    <div className="row">
      {/* Option A */}
      <div className="col-sm-6 d-grid gap-2">
        <p className="">A</p>
        <button className="btn btn-outline-secondary" id="btn-a" onClick={() => { SelectAnswer("a"); }}>{questions[currQuestion].optionA}</button>
      </div>

      {/* Option B */}
      <div className="col-sm-6 d-grid gap-2">
        <p className="">B</p>
        <button className="btn btn-outline-secondary btn-block" id="btn-b" onClick={() => { SelectAnswer("b"); }}>{questions[currQuestion].optionB}</button>
      </div>

    </div>

    <div className="row">
      {/* Option C */}
      <div className="col-sm-6 d-grid gap-2">
        <p className="my-0">C</p>
        <button className="btn btn-outline-secondary btn-block" id="btn-c" onClick={() => { SelectAnswer("c"); }}>{questions[currQuestion].optionC}</button>
      </div>

      {/* Option D */}
      <div className="col-sm-6 d-grid gap-2">
        <p className="my-0">D</p>
        <button className="btn btn-outline-secondary btn-block" id="btn-d" onClick={() => { SelectAnswer("d"); }}>{questions[currQuestion].optionD}</button>
      </div>

    </div>


    <div className="row">
      <div className="col-sm-12 d-grid gap-2 my-4">
        
          {/* Change next button text when we reach last question */}
          <button id="nextBtn" onClick={() => { nextQuestion(); }} className="startBtn py-3"> {questionCounter < maxNumOfQuestions ? 'Next question' : 'End quiz'}</button>
      </div>
    </div>
   
    </section>
  );
};
export default Question;