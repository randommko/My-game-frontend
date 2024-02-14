import React from "react";

class Title extends React.Component {
    render() { 
        const TitleStyle = {
            border: "1px solid rgb(255, 255, 255, 0.2)",
            borderRadius: "4px",
            margin: "2px",
            padding: "5px"
          }
        return (
            <div style={TitleStyle}>
                <h2>{this.props.title} (title)</h2>
            </div>
        )
    };
}

export default Title;