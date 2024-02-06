import './App.css';
import GameField from './components/GameField';
import Log from './Log';
import GamePropeties from './components/GameProperties';
import Background from './components/Background';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Background/>       
      <Title/>
        
        <div className="Main-container">
          <div className="Field-title">
            <h2>Игровое поле</h2>
          </div>
          <div className="Log-title">
            <h2>История ходов</h2>
          </div>
          <div className="Field-container" >
            <GameField Name="123"/>
          </div>
          <div className="Log-container">
            <Log Name="123"/>
          </div>
        </div>
      
      
    </div>
  );
}

export default App;
