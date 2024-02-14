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
            fontWeight: "bold",
        };
        return (
            <div style={cellStyle}>
                {this.props.num}
            </div>
        )
    };
}

export default TitleCell;