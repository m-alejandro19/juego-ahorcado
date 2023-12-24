import { useState } from "react"
import { useEffect } from "react";

import { letters } from "./helpers/letters"
import HangImage from "./components/HangImage"
import { getRandomWord } from "./helpers/getRandomWord";

function App() {

  const [word, setWord] = useState(getRandomWord());
  //REPITE EN _ EN BASE A LA LONGITUD DE WORD
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [intentos, setIntentos] = useState(0);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);

  //DETERMINA SI LA PERSONA PERDIO
  useEffect( () => {
    if(intentos === 9){
      setLose(true);
    }
  }, [intentos])//LA FUNCION SE DISPARARA CADA VEZ QUE LOS INTENTOS CAMBIEN

  //DETERMINAR SI LA PERSONA GANO
  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if(currentHiddenWord === word){
      setWin(true);
    }
  },[hiddenWord]);

  const checkLetter = (letra: string) => {
    if(lose) return
    if(win) return
    
    if(!word.includes(letra)){
      //                   INCREMENTA EL ESTADO EN 1 Y NO PERMITE QUE EL VALOR MAXIMO SEA SUPERIOR A 9
      setIntentos(Math.min(intentos + 1, 9));
      return
    }
    
    const hiddenWordArray = hiddenWord.split(' ');
    
    for(let i = 0; i < word.length; i++){
      if(word[i] === letra){
        hiddenWordArray[i] = letra
      }
    }
    setHiddenWord(hiddenWordArray.join(' '))
  }

  //REINICIA EL JUECO
  const newGame = () => {

    const newWord = getRandomWord();

    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setIntentos(0);
    setLose(false);
    setWin(false);
  }

  return (
    <div className="contenedor">
      {/* Imagen del juego imageNumber es una props */}
      <HangImage imageNumber={intentos}/>

      {/* Palabra oculta */}
      <h3>{hiddenWord}</h3>

      {/* Contador de intentos */}
      <h3>Intentos: {intentos}</h3>

      {/* Mensaje si perdio */}
      {
        (lose)? <h2>Perdiste, la palabra es: {word}</h2> : ''
      }
      {
        (win)? <h2>Haz ganado!</h2> : ''
      }
      {/* Botones */}
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
  )
}

export default App
