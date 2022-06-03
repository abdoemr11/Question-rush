import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";


const getAllQuestions = async() => {
    const questionReference = collection(db, "questions");
    const retrivedQuestionsDocs = await getDocs(questionReference);
    return retrivedQuestionsDocs.docs.map((question) => ({...question.data(), id:question.id}) )


}