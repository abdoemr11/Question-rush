import { AddAnswer } from "./AddAnswer";
import { Answer } from "./Answer";

export const Question = ({question, answers}) =>{

    return(
        <div>
            <h1>{question.questionTitle}</h1>
            <div>
                <p>{question.questionText}</p>
                {/* answers */}
                {answers.map(ans=><Answer answer={ans}/>)}
                <AddAnswer/>
            </div>
            
        </div>

    );
};