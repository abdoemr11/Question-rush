import { auth } from "../firebase-config"

export const Answer = ({answer, index, isAuth}) => {
    return (
        <div className="answer">
            <h3>Answer {index}</h3>
            <p>{answer.answerText}</p>
            {isAuth&&auth.currentUser.uid===answer.author.id&&<button> &#128465;	</button>}
            
        </div>

   );
}