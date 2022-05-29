import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { Question } from "./Question";
export const Questions = () => {
    const dummy_question = [{questionTitle: "this is question title", questionText: "are you good, my son", id: 123}];
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const questionReference = collection(db, "questions");
    const answerReference = collection(db, "answers");
    useEffect(()=>{
        const getQuest = async()=>{
            const retrivedQuestions = await getDocs(questionReference);
            setQuestions(retrivedQuestions.docs.map((question) => ({...question.data(), id:question.id}) ));
        }
        const getAns = async() => {
            const retrivedAnswers = await getDocs(answerReference);
            setQuestions(retrivedAnswers.docs.map((ans) => ({...ans.data(), id:ans.id}) ));
        }
        // getQuest();
        setQuestions(dummy_question);

    }, []);
    return(
        <div>
        {
            questions.map(question=><Question key={question.id} question={question}/>)
        }
            
        </div>
    );
}