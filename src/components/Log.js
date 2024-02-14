import React from 'react'
import '../App.css'

class Log extends React.Component {
  render() {
    
    const LogConteinerStyle = {
            border: "1px solid rgb(255, 255, 255, 0.2)",
            borderRadius: "4px",
            margin: "2px",
            padding: "5px",
            width: "50%"
    }

    return <div>
            <div style={LogConteinerStyle}>
              <h2>Тут будет история ходов</h2>
            </div>
          </div>
  }
}

export default Log;