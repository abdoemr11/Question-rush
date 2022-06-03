
import { useState } from "react";
import { FireBase } from "../services/BackEnd";


export const AddAnswer = ({isAuth, id}) => {
    const [answerText, setAnswerText] = useState('');
    const sumbitAnswer = async () => {
        await FireBase.submitAnswer(id, answerText);
        console.log('click the submit button');
    }
    if(isAuth)
        return(
            <div className="add-answer">

                <label htmlFor="answer_text">Write your answer</label>
                <textarea name="answer_text" 
                    onChange={(e)=>setAnswerText(e.target.value)}
                    value={answerText}
                    required
                />
                <button onClick={sumbitAnswer}>Submit</button>
            </div>

        );
    return (
        <div className="login-warning">
            <a  href="/login">Login to add answers</a>
        </div>

    )
}