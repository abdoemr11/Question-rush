import {FireBase} from "../services/FireBase"
import { useEffect, useState } from "react";
import { Question } from "./Question";
import { async } from "@firebase/util";
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

        const getData = async()=>{
            setQuestions(await FireBase.getAllQuestions());
            setAnswers(await FireBase.getAllAnswers());
    
        }
        getData()
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