import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { questions } from './assets/questions.js'
import { colors } from './assets/colors.js';
import { randomizeArray, getQuestions } from './utils.js';
import { Question } from './components/Question.js';
import { Players } from './components/Players.js';



function App() {
  const [ currentQuestions, setCurrentQuestions ] = useState([]);
  const [ players, setPlayers ] = useState([]);
  const [ currentPlayerIndex, setCurrentPlayerIndex ] = useState(0);
  const questionArray = randomizeArray(questions);
  const userColors = randomizeArray(colors);
  
  const handleOnClick = (index) => {

    // Don't flip if no players defined?
    if (!players.length) return;
    // clone the currentQuestions so that we can update the flipped state.
    let tmpQuestions = [...currentQuestions];
    tmpQuestions[index].flipped = !tmpQuestions[index].flipped;

    if ( !tmpQuestions[index].color) {
      tmpQuestions[index].color = players[currentPlayerIndex]?.playerColor;
    }

    setCurrentQuestions(tmpQuestions);
  };

  const handleAddPlayer = (playerName) => {
    const newPlayer = {
      playerName,
      playerColor: userColors.pop(),
    }
    setPlayers([ ...players, newPlayer ]);
  };

  const handleCurrentPlayer = () => {
    let index = currentPlayerIndex + 1;

    if (index >= players.length) index = 0;

    setCurrentPlayerIndex(index);
  };


  useEffect(() => {
    setCurrentQuestions(getQuestions(questionArray));
  }, [ questionArray ]);

  return (
    <div className="App">
        <div Name="container">
          
          <Players 
            players={players}
            currentPlayerIndex={currentPlayerIndex}
            onAddPlayer={handleAddPlayer} 
            onSwitchPlayer={handleCurrentPlayer} /> 

          <div className="questions">
            {currentQuestions.map((question, index) => { 
              return (
                <Question 
                  key={`question-tile-${index}`}
                  color={question.color} 
                  flipped={question.flipped} 
                  question={question.question}
                  onClick={() => handleOnClick(index)} 
                  index={index} />);
              })
            }
          </div>
        </div>
    </div>
  );
}

export default App;
