import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config"

export const Answer = ({answer, index, isAuth}) => {
    const removeAnswer = async() => {
        await deleteDoc(doc(db, "answers", answer.id));

    }
    return (
        <div className="answer">
            {/* <h3>Answer {index}</h3> */}
            <span>{answer.author.name }:</span>
            <p>{answer.answerText}</p>
            {isAuth&&auth.currentUser.uid===answer.author.id&&<button onClick={removeAnswer}> &#128465;	</button>}
            
        </div>

   );
}