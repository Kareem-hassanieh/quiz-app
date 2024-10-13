import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const questions = [
    {
      question: "what is the capital of columbia",
      options: ["Berlin", "Bogatta", "paris", "Beirut"],
      answer: "Bogatta"
    },


    {

      question: "what is the longest tower in the world",
      options: ["burj khalifa", "paris tower", "Beirut tower", "shanghai tower"],
      answer: "shanghai tower"
    }

  ]


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [currentImageIndex, setQurrentImageIndex] = useState(0)
  const [hasAnswered,setHasAnswered]=useState(false);

  function handleOptionClick(option) {

    if(!hasAnswered){
      if (option === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      setHasAnswered(true);
      }



  
  }

  function handleNextQuestion(){
    setCurrentQuestion(currentQuestion+1);
    setHasAnswered(false);
  }


return (
  <>

    <div className="question-container">
      <h2>{questions[currentQuestion].question}</h2>


      <div className="options-container">

        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleOptionClick(option)}  disabled={hasAnswered}>{option}</button>
        ))}
      </div>
      <button className="next-button" onClick={handleNextQuestion}>Next</button>

      <p>Score:{score}</p>



    </div>







  </>
)
}

export default App
