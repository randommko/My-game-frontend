import React from 'react'


import grassImg from "../img/grass.jpg"
import orcImg from "../img/orc.png"
import humanImg from "../img/human.jpg"



class Cell extends React.Component {
    render() {
        const cellStyle = {
            display: "grid",
            /*background-color: cadetblue;*/
            borderRadius: "2px",
            justifyItems: "center",
            alignItems: "center"
        };
        
        const cellType = this.props.type;
        let cellImage = '';
        let cellTitle = '';

        if (cellType === "grass") {
            cellTitle = 'Grass';
            cellImage = grassImg;
        }
        else if (cellType === "human") {
            cellTitle = 'Human';
            cellImage = humanImg;
        }
            
        else if (cellType === "orc") {
                cellTitle = 'Orc';
                cellImage = orcImg; 
            }

        return (<>
                    <div> <img style={cellStyle} src={cellImage} width={this.props.width} height={this.props.height} title={cellTitle} alt=''/> </div>
                </>
        )
    };
}


export default Cell;