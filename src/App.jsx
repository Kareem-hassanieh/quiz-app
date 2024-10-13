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
      answer: "Bogatta"
    }

  ]

  
  const [currentQuestion,setQurrentQuestion]=useState(0);
  const [score,setScore]=useState(0);
  const [currentImageIndex,setQurrentImageIndex]=useState(0)


  return (
    <>
      <div></div>

    </>
  )
}

export default App
