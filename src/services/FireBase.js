import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";


const getAllQuestions = async() => {
    const questionReference = collection(db, "questions");
    const retrivedQuestionsDocs = await getDocs(questionReference);
    const allQuestions =  retrivedQuestionsDocs.docs.map((question) => ({...question.data(), id:question.id}) )
    return allQuestions


}
const getAllAnswers = async()=>{
    const answerReference = collection(db, "answers");
    const retrivedAnswersDocs = await getDocs(answerReference);
    return retrivedAnswersDocs.docs.map((ans) => ({...ans.data(), id:ans.id}) );
}

export const FireBase = {getAllQuestions, getAllAnswers}