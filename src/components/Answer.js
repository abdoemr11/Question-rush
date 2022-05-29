export const Answer = ({answer, index}) => {
    return (
        <div className="answer">
            <h3>Answer {index}</h3>
            <p>{answer.answerText}</p>
        </div>

   );
}