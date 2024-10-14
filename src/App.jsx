import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function App() {

  const questions = [
    {
      question: "what is the capital of the Germany?",
      options: ["Berlin", "Lima", "paris", "Beirut"],
      answer: "Berlin",
      images: ['src/assets/pexels-stuthnagyniki-1128416.jpg', 'src/assets/pexels-shvets-2570063.jpg']
    },


    {

      question: "what is the capital of the Japan?",
      options: ["Beijing", "Tokyo", "Seoul", "Moscow"],
      answer: "Tokyo",
      images: ['src/assets/pexels-apasaric-1510595.jpg', 'src/assets/pexels-nickkwanhk-2614818.jpg']
    },

    {
      question: "what is the capital of the Australlia?",
      options: ["cabul", "canberra", "aukland", "sydney"],
      answer: "canberra",
      images: ['src/assets/pexels-luis-sosa-1141354972-22866400.jpg', 'src/assets/pexels-mark-direen-622749-17582203.jpg']
    }



  ]


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  function handleOptionClick(option) {

    if (!hasAnswered) {
      setSelectedOption(option);
      if (option === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
    }

    setHasAnswered(true);

  }

  function handleNextQuestion() {
    setCurrentQuestion(currentQuestion + 1);
    setHasAnswered(false);
  }

  function handleLeftClick() {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0))
  }
  function handleRightClick() {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0))
  }

  

  return (
    <>






      <div className='image-container'>

        <button onClick={handleLeftClick} className='left-arrow'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>


        <img src={questions[currentQuestion].images[currentImageIndex]}></img>









        <button onClick={handleRightClick} className='right-arrow'>

          <FontAwesomeIcon icon={faArrowRight} />


        </button>


      </div>

      <h1>{questions[currentQuestion].question}</h1>


      <div className="options-container">

        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleOptionClick(option)} disabled={hasAnswered}
          style={{
            backgroundColor:
              hasAnswered && option === questions[currentQuestion].answer
                ? 'green'
                : hasAnswered && option === selectedOption
                ? 'red'
                : ''
          }}

          

          >{option}</button>
        ))

        }

        <button id="next-button" onClick={handleNextQuestion} disabled={!hasAnswered || currentQuestion === questions.length - 1}>Next</button>
      </div>




      <h2>Score:{score}/3</h2>











    </>
  )
}

export default App