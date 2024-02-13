import './App.css';
import GameField from './components/GameField';
import Log from './components/Log';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="Background-img">
      <Header/>
      <div className="Main-container">
        <GameField/>
        <Log/>
        <Footer/>
      </div>
      
      </div>
    </div>
  );
}

export default App;
