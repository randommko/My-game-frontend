import React from 'react'
import '../App.css'


class Title extends React.Component {
  render() {
    const MainTitleStyle = {
      display: "grid",
      background: "linear-gradient(to left, rgb(255, 255, 255, 0), rgba(30, 144, 255, 0.3), rgb(255, 255, 255, 0))",
      height: "60px",
      alignContent: "center"
    }
    return <div style={MainTitleStyle}>
              <h1>ORC and HUMANS</h1>
            </div>
  }
}

export default Title