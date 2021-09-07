import React from 'react'
// icons
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from  'react-icons/ai';

export const Question = ({title,info}) => {
    const [showText, setShowText] = React.useState(false)

    return (
    <li className="question">
        <header className="question__header">
            <h2>{title}</h2>
            <button className="question__open-btn" onClick={() => setShowText(!showText)}>
                {showText ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </header>
        <p className="question__text">{showText ? info : ""}</p>
        {/*Could also show / hide the text w/
            {showText && <p className="question__text">{info}</p>}
        */}
    </li>
    )
}
