import { useState } from "react"
import { useEffect } from "react";

import { letters } from "./helpers/letters"
import HangImage from "./components/HangImage"
import { getRandomWord } from "./helpers/getRandomWord";

function App() {

  const [word, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [intentos, setIntentos] = useState(0);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);

  useEffect( () => {
    if(intentos === 9){
      setLose(true);
    }
  }, [intentos]);

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if(currentHiddenWord === word){
      setWin(true);
    }
  },[hiddenWord]);

  const checkLetter = (letra: string) => {
    if(lose) return;
    if(win) return;
    
    if(!word.includes(letra)){
      setIntentos(Math.min(intentos + 1, 9));
      return;
    }
    
    const hiddenWordArray = hiddenWord.split(' ');
    
    for(let i = 0; i < word.length; i++){
      if(word[i] === letra){
        hiddenWordArray[i] = letra
      }
    }
    setHiddenWord(hiddenWordArray.join(' '));
  };

  const newGame = () => {

    const newWord = getRandomWord();

    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setIntentos(0);
    setLose(false);
    setWin(false);
  }

  return (
    <>
      <h2>Países de América</h2>
      <div className="contenedor">
        <HangImage imageNumber={intentos}/>

        <h3>{hiddenWord}</h3>

        <h3>Intentos: {intentos}</h3>

        {
          (lose)? <h2>Perdiste, el país es: {word}</h2> : ''
        }
        {
          (win)? <h2>¡Haz ganado!</h2> : ''
        }
        <div className="contenedor-botones">
          {
            letters.map((letra, index) => (
              <button 
                key={index}
                onClick={() => checkLetter(letra) }
                >{letra}
              </button>
            ))
          }
        </div>
        <button onClick={newGame}>¿Nuevo Juego?</button>
      </div>
    </>
  )
}

export default App;
