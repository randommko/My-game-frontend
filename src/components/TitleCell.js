import React from 'react'

class TitleCell extends React.Component {
    render() { 
        const cellStyle = {
            display: "grid",
            backgroundColor: "rgb(171, 204, 204, 0.1)",
            borderRadius: "8px",
            color: "rgb(255, 255, 255)",
            justifyItems: "center",
            alignItems: "center",
            fontWeight: "bold"
        };
        return (
            <div style={cellStyle} width={this.props.width} height={this.props.height}>
                {this.props.text}
            </div>
        )
    };
}

export default TitleCell;