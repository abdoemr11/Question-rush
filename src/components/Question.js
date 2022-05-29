export const Question = ({question}) =>{

    return(
        <div>
            <h1>{question.questionTitle}</h1>
            <div>
                <p>{question.questionText}</p>
            </div>
            Add
        </div>

    );
};