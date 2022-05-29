import { AddAnswer } from "./AddAnswer";

export const Question = ({question, answers}) =>{

    return(
        <div>
            <h1>{question.questionTitle}</h1>
            <div>
                <p>{question.questionText}</p>
                {/* answers */}
                {answers.map(ans=><An)}
                <AddAnswer/>
            </div>
            
        </div>

    );
};