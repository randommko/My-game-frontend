//содержит в себе кнопки

import React from 'react'
import '../App.css'



class Footer extends React.Component {
  render() {
    const footerStyle = {
      display: "grid",
      gridAutoFlow: "column",
      gap: "1em",
      margin: "2px",
      gridColumn: "span 2"
    }
    const doGameStep = () => {
      console.log("Нажали кнопку выполенняи шага")
    };

    const testConnection = () => {
      console.log("Проверка соедения с сервером")
    };

    return(
      <div style={footerStyle}>
        <button onClick={testConnection}>Test connection</button>
        <button onClick={doGameStep}>Следующий ход</button>
      </div>
    );
  }
}

export default Footer