import { AddAnswer } from "./AddAnswer";
import { Answer } from "./Answer";

export const Question = ({question, answers, isAuth}) =>{

    return(
        <div className="question">
            <h1>{question.questionTitle}</h1>
            by <span>{question.author.name}</span>
            <div>
                <p>{question.questionText}</p>
                {/* answers */}
                <h3>Answers</h3>
                {answers.map((ans,i)=><Answer answer={ans} index={i} isAuth={isAuth}/>)}
                <AddAnswer isAuth={isAuth} id={question.id}/>
            </div>
            
        </div>

    );
};