import React, {useState} from 'react'
import questionsData from "./questionsData"
import {Question} from "./Question";


export const App = () => {
  const [questionsDataState, setQuestionsDataState] = useState(questionsData);


    return (
        <section className="container">
          <h1 className="container-heading">Questions And Answers About Login</h1>
          <ul className="questions">
            {questionsDataState.map((question) => {
                const {id} = question;
                return (
                  <Question  key={id} {...question}/>
                )
            })}
        </ul>
        </section>
    )
}
