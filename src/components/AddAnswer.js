import { useState } from "react";

export const AddAnswer = ({isAuth}) => {
    const [answerText, setAnswerText] = useState('');
    const sumbitAnswer = async () => {

    }
    if(isAuth)
        return(
            <div>

                <label htmlFor="answer_text">Write your answer</label>
                <textarea name="answer_text" 
                    onChange={(e)=>setAnswerText(e.target.value)}
                    value={answerText}
                    required
                />
                <button onClick={sumbitAnswer}>Submit Question</button>
            </div>

        );
    return (
        <p className="login-warning">Login to add answers</p>
    )
}