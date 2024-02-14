import React from 'react'
import '../App.css'

class Log extends React.Component {
  render() {
    const LogTitleStyle = {
      border: "1px solid rgb(255, 255, 255, 0.2)",
      borderRadius: "4px",
      margin: "2px",
      padding: "5px",
      height: "79px"
    }
    const LogStyle = {
      display: "grid",
      gridAutoFlow: "row",
      gridTemplateColumns: "auto",
      gridTemplateRows: "auto auto"
    }
    const LogConteinerStyle = {
      border: "1px solid rgb(255, 255, 255, 0.2)",
      borderRadius: "4px",
      margin: "2px",
      padding: "5px"
    }

    return <div style={LogStyle}>
            <div style={LogTitleStyle}>
              <h2>История ходов</h2>
            </div>
          
            <div style={LogConteinerStyle}>
              <h2>Тут будет история ходов</h2>
            </div>
          </div>
  }
}

export default Log;