import './App.css';
import GameField from './components/GameField';
import Log from './components/Log';
import Header from './components/Header';
import Footer from './components/Footer'
import GameFieldTitle from './components/GameFieldTitle';
import LogTitle from './components/LogTitle';

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

  const MainStyle = {
    display: "grid",
    gridAutoFlow: "row",
    border: "1px solid rgb(255, 255, 255, 0.2)",
    borderRadius: "4px",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto auto",
    gap: "5px",
    margin: "2px",
    padding: "5px"
  }
  return (
    <div className="App">
      <div style={BackgroundStyle}>
      <Header/>
      <div style={MainStyle}>
        <GameFieldTitle/>
        <GameField/>
        <LogTitle/>
        <Log/>
        <Footer/>
      </div>
      </div>
    </div>
  );
}

export default App;
