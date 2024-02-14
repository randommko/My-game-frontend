//содержит в себе кнопки

import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



class Footer extends React.Component {
  render() {
    const footerStyle = {
      display: "grid",
      gridAutoFlow: "column",
      gap: "1em",
      margin: "2px"
    }
    const doGameStep = () => {
      console.log("Нажали кнопку выполенняи шага")
    };

    const testConnection = () => {
      console.log("Проверка соедения с сервером")
    };

    return(
      <div style={footerStyle}>
        <Button variant="primary" onClick={doGameStep}>Следующий ход</Button> {' '}
        <Button variant="secondary" onClick={testConnection}>Test connection</Button> {' '}
      </div>
    );
  }
}

export default Footer