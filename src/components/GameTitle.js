import React from 'react'
import '../App.css'


class GameTitle extends React.Component {
  render() {
    const MainGameTitleStyle = {
      display: "grid",
      background: "linear-gradient(to left, rgb(255, 255, 255, 0), rgba(30, 144, 255, 0.3), rgb(255, 255, 255, 0))",
      height: "60px",
      alignContent: "center"
    }
    return <div style={MainGameTitleStyle}>
              <h1>ORC and HUMANS</h1>
            </div>
  }
}

export default GameTitle