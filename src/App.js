import React, {useState} from 'react'
import questionsData from "./questionsData"

import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from  'react-icons/ai';

export const App = () => {

    return (
        <section className="container">
          <h1 className="container-heading">Questions And Answers About Login</h1>

          <ul className="questions">
            <li className="question">
              <header className="question__header">
                <h2>Do I have to allow the use of cookes?</h2>
                <button className="question__open-btn"><AiOutlinePlus/></button>
              </header>
              <p className="question__text show-question-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci nisi est assumenda iure cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci nisi est assumenda iure cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci nisi est assumenda iure cumque.</p>
            </li>

            <li className="question">
              <header className="question__header">
                <h2>Do I have to allow the use of cookes?</h2>
                <button className="question__open-btn"><AiOutlinePlus/></button>
              </header>
              <p className="question__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci nisi est assumenda iure cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci nisi est assumenda iure cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci nisi est assumenda iure cumque.</p>
            </li>

            <li className="question">
              <header className="question__header">
                <h2>Do I have to allow the use of cookes?</h2>
                <button className="question__open-btn"><AiOutlinePlus/></button>
              </header>
              <p className="question__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci nisi est assumenda iure cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci nisi est assumenda iure cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci nisi est assumenda iure cumque.</p>
            </li>
          </ul>
        </section>
    )
}
