import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase-config";

export const AddAnswer = ({isAuth, id}) => {
    const [answerText, setAnswerText] = useState('');
    const sumbitAnswer = async () => {
        const docRef = collection(db, "answers");
        await addDoc(docRef, {
            questionId: id,
            answerText,
            author: {
                name: auth.currentUser.displayName, 
                id: auth.currentUser.uid
            }
        })
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
        <p className="login-warning">Login to add answers</p>
    )
}