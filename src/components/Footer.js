//содержит в себе кнопки

import React from 'react'
import '../App.css'



class Footer extends React.Component {
  render() {
    const doGameStep = () => {
      console.log("Нажали кнопку выполенняи шага")
    };

    const testConnection = () => {
      console.log("Проверка соедения с сервером")
    };

    return(
      <div>
        <button onClick={testConnection}>Test connection</button>
        <button onClick={doGameStep}>Следующий ход</button>
      </div>
    );
  }
}

export default Footer