import { AddAnswer } from "./AddAnswer";
import { Answer } from "./Answer";

export const Question = ({question, answers, isAuth}) =>{

    return(
        <div className="question">
            <h1>{question.questionTitle}</h1>
            <div>
                <p>{question.questionText}</p>
                {/* answers */}
                {answers.map((ans,i)=><Answer answer={ans} index={i}/>)}
                <AddAnswer isAuth={isAuth}/>
            </div>
            
        </div>

    );
};