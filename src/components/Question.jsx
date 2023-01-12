import  { useContext } from "react";
import { QuizContext } from "./context/quiz";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return ( 
  <div id="question">
    <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
    <h2>Pergunta Atual</h2>
    <div id="options-container">
        <p>Opções</p>
    </div>
    <button>Continuar</button>
  </div>
  );
};

export default Question;

