//содержит в себе кнопки

import React from 'react'
import '../App.css'



class Footer extends React.Component {
  render() {
    return(
      <div>
        <button className="main_butoon" onclick="testConnection()">Test connection</button>
        <button className="main_butoon" title="Запросить следующий ход от сервера" onclick="doGameStep()">Следующий ход</button>
      </div>
    );
  }
}

export default Footer