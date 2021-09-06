import React from 'react'
// icons
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from  'react-icons/ai';

export const Questions = ({showText, questionsData}) => {
    const [icon, setIcon] = React.useState(true)
    console.log(questionsData)

    return (
        <ul className="questions">
            {questionsData.map((question) => {
                const {id, info, title} = question

                return (
                    <li key={id} className="question">
                        <header className="question__header">
                            <h2>{title}</h2>
                            <button className="question__open-btn" onClick={() => setIcon(!icon)}>
                                {icon ? <AiOutlinePlus/> : <AiOutlineMinus/>}
                            </button>
                        </header>
                        <p className="question__text">{info}</p>
                    </li>
                        )
            })}
        </ul>
    )
}
