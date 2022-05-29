import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";

 export const AddQuestion = ({auth, isAuth}) => {
    const [questionTitle, setQuestionTitle] = useState('');
    const [questionText, setQuestionText] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        if(!isAuth)
            navigate("/");

    }, []);
    const sumbitQuestion = async() => {
        const docRef = collection(db, "questions");
        await addDoc(docRef, {
            questionTitle,
            questionText,
            author: {
                name: auth.currentUser.displayName, 
                id: auth.currentUser.uid
            }
        })
        navigate('/');

    }
    return (
        <div className="add-question container">
            <label htmlFor="question_title">Question title</label>
            <input type="text" name="question_title" 
                onChange={(e)=>setQuestionTitle(e.target.value)}
                value={questionTitle}
            />
            <br />
            <label htmlFor="question_text">Question Text</label>
            <textarea name="question_text" 
                onChange={(e)=>setQuestionText(e.target.value)}
                value={questionText}
            />
            <button onClick={sumbitQuestion}>Submit</button>
        </div>
    )
};