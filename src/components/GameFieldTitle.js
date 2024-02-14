import React from "react";

class GameFieldTitle extends React.Component {
    render() { 
        const FieldTitleStyle = {
            border: "1px solid rgb(255, 255, 255, 0.2)",
            borderRadius: "4px",
            margin: "2px",
            padding: "5px"
          }
        return (
            <div style={FieldTitleStyle}>
                <h2>Игровое поле</h2>
            </div>
        )
    };
}

export default GameFieldTitle;