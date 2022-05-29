import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { Question } from "./Question";
export const Questions = ({isAuth}) => {
    const dummy_question = [{questionTitle: "this is question title", 
                            questionText: "are you good, my son", 
                            id: 123},
                            {questionTitle: "this is question title", 
                            questionText: "are you good, my son", 
                            id: 2}];
    const dummy_answer = [{answerText: "this is adsfadsf title", 
                            author:{ name: "abdo", id: 1}, 
                            id: 10,
                            questionId:123},
                            {answerText: "this is answer text", 
                            author:{ name: "abdo", id: 1}, 
                            id: 10,
                            questionId:123},
                        
                        ];
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(()=>{
        const questionReference = collection(db, "questions");
        const answerReference = collection(db, "answers");
        const getQuest = async()=>{
            const retrivedQuestions = await getDocs(questionReference);
            setQuestions(retrivedQuestions.docs.map((question) => ({...question.data(), id:question.id}) ));
        }
        const getAns = async() => {
            const retrivedAnswers = await getDocs(answerReference);
            setAnswers(retrivedAnswers.docs.map((ans) => ({...ans.data(), id:ans.id}) ));
        }
        getQuest();
        getAns();

    }, [answers, questions]);
    return(
        <div className="container">
        {
            questions.map(question=>
                <Question   key={question.id} 
                            question={question}
                            answers = {answers.filter(ans=>ans.questionId === question.id)}
                            isAuth={isAuth}
                            />)
        }
            
        </div>
    );
}