import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { Question } from "./Question";
export const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const questionReference = collection(db, "questions");
    useEffect(()=>{
        const getQuest = async()=>{
            const retrivedQuestions = await getDocs(questionReference);
            setQuestions(retrivedQuestions.docs.map((question) => ({...question.data(), id:question.id}) ));
        }
        getQuest();
    }, []);
    return(
        <div>
        {
            questions.map(question=><Question key={question.id} question={question}/>)
        }
            
        </div>
    );
}