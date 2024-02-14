import './App.css';
import GameField from './components/GameField';
import Log from './components/Log';
import Header from './components/Header';
import Footer from './components/Footer'
import Title from './components/Title';
import React from 'react';


function App() {
  
  const BackgroundStyle = {
    height: "1000px",
    /*TODO: не работает картинка на фоне*/
    background: "rgba(0, 0, 0, 0.855)", /* Прописываем путь к картинке и задаем цвет и прозрачность */
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "multiply",
    textAlign: "center", /* Текст по центру */
    color: "#fff", /* Цвет текста */
    padding: "10px 0" /* Отступ сверху и снизу */
  }

  // const MainStyle = {
  //   display: "grid",
  //   border: "1px solid rgb(255, 255, 255, 0.2)",
  //   borderRadius: "4px",
  //   gridTemplateColumns: "repeat(2, 'auto')",
  //   gap: "5px",
  //   margin: "2px",
  //   padding: "5px"
  // }
  const MainStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "stretch"
  }
  return (
    <div className="App">
      <div style={BackgroundStyle}>
      <Header/>
      <div style={MainStyle}>
        <Title title="Игровое поле"/>
        <Title title="История ходов"/>
        <GameField/>
        <Log/>
        <Footer/>
      </div>
      </div>
    </div>
  );
}

export default App;
