import React from "react";

class LogTitle extends React.Component {
    render() { 
        const LogTitleStyle = {
            border: "1px solid rgb(255, 255, 255, 0.2)",
            borderRadius: "4px",
            margin: "2px",
            padding: "5px"
          }
        return (
            <div style={LogTitleStyle}>
                <h2>История ходов</h2>
            </div>
        )
    };
}

export default LogTitle;