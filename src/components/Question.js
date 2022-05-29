import { AddAnswer } from "./AddAnswer";
import { Answer } from "./Answer";

export const Question = ({question, answers, isAuth}) =>{

    return(
        <div className="question">
            <h1>{question.questionTitle}</h1>
            by <span className="author-name">{question.author.name}</span>
            <div>
                <p>{question.questionText}</p>
                {/* answers */}
                {
                    answers.length === 0
                    ?<p className="no-answers">There are no answers yet&#128577;</p>
                    :<>
                        <h3>Answers</h3>
                        {answers.map((ans,i)=><Answer answer={ans} index={i} isAuth={isAuth}/>)}
                    </>}


                <AddAnswer isAuth={isAuth} id={question.id}/>
            </div>
            
        </div>

    );
};