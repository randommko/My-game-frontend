import './App.css';
import GameField from './components/GameField';
import Log from './components/Log';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="Background-img">
      <Header/>
        <div className="Main-container">
          <GameField/>
          <Log/>
        </div>
      </div>
    </div>
  );
}

export default App;
