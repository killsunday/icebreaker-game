import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { questions } from './assets/questions.js'
import { colors } from './assets/colors.js';
import { randomizeArray, getQuestions } from './utils.js';
import { Question } from './components/Question.js';



function App() {
  const [ currentQuestions, setCurrentQuestions ] = useState([]);
  const questionArray = randomizeArray(questions);
  const userColors = randomizeArray(colors);
  
  const handleOnClick = (index) => {

    // clone the currentQuestions so that we can update the flipped state.
    let tmpQuestions = [...currentQuestions];
    tmpQuestions[index].flipped = !tmpQuestions[index].flipped;
    if ( !tmpQuestions[index].color ) {
      tmpQuestions[index].color = userColors.pop();
    }

    setCurrentQuestions(tmpQuestions);
  };

  useEffect(() => {
    setCurrentQuestions(getQuestions(questionArray));
  }, [ questionArray ]);

  return (
    <div className="App">
        <div class="questions">
          {currentQuestions.map((question, index) => <Question color={question.color} flipped={question.flipped} question={question.question} onClick={() => handleOnClick(index)} index={index} />)}
        </div>
    </div>
  );
}

export default App;
