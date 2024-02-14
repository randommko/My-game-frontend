import React from 'react'


import Cell from "../components/Cell.js"
import TitleCell from './TitleCell.js'

class GameField extends React.Component {
  render() {
    const FieldContainerStyle = {
      display: "grid",
      gridAutoFlow: "column",
      border: "1px solid rgb(255, 255, 255, 0.2)",
      borderRadius: "4px",
      gridTemplateColumns: "repeat(9, 40px)",
      gridTemplateRows: "repeat(9, 40px)",
      gap: "5px",
      margin: "2px",
      padding: "5px"
    }
    return <div>
            <div style={FieldContainerStyle}>
            <div> </div>
                <TitleCell num='1'/>
                <TitleCell num='2'/>
                <TitleCell num='3'/>
                <TitleCell num='4'/>
                <TitleCell num='5'/>
                <TitleCell num='6'/>
                <TitleCell num='7'/>
                <TitleCell num='8'/>

                <TitleCell num='1'/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>

                <TitleCell num='2'/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="orc"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>

                <TitleCell num='3'/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>

                <TitleCell num='4'/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>

                <TitleCell num='5'/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>

                <TitleCell num='6'/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="human"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>

                <TitleCell num='7'/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>

                <TitleCell num='8'/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
                <Cell type="grass"/>
            </div>
           </div>
  }
}

export default GameField;