import './App.css';
import GameField from './components/GameField';
import Log from './components/Log';
import Header from './components/Header';
import Footer from './components/Footer'
import Title from './components/Title';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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

  return (
    <div className="App">
      <div style={BackgroundStyle}>
        <Container>
          <Row>
            <Header/>
          </Row>
          <Row>
            <Col>
              <Title title="Игровое поле"/>
            </Col>
            <Col xs={4}>
              <Title title="История ходов"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <GameField/>
            </Col>
            <Col xs={4}>
              <Log/>
            </Col>
          </Row>
          <Row>
            <Footer/>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
