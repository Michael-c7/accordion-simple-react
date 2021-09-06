import React, {useState} from 'react'
import questionsData from "./questionsData"
import {Questions} from "./Questions";


export const App = () => {
  const [questionsDataState, setQuestionsDataState] = useState(questionsData);
  const [showText, setShowText] = useState(true)
  


    return (
        <section className="container">
          <h1 className="container-heading">Questions And Answers About Login</h1>
          <Questions showText={showText} questionsData={questionsDataState}/>
        </section>
    )
}
