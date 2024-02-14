import React from 'react'


import Cell from "../components/Cell.js"
import TitleCell from './TitleCell.js'


class GameField extends React.Component {
  render() {
    const cellSize = '60px';
    const fieldSize = 9;
    const FieldContainerStyle = {
      display: "grid",
      gridAutoFlow: "column",
      border: "1px solid rgb(255, 255, 255, 0.2)",
      borderRadius: "4px",
      gridTemplateColumns: "repeat(9, 60px)",
      gridTemplateRows: "repeat(9, 60px)",
      gap: "5px",
      margin: "2px",
      padding: "5px"
    }

    var newField = []
    for (var i = 0; i < fieldSize; i++) {
      for (var j = 0; j < fieldSize; j++) {
        if (i === 0 && j === 0)
          newField.push(<TitleCell width={cellSize} height={cellSize}></TitleCell>)
        else if (i === 0)
          newField.push(<TitleCell text={j} width={cellSize} height={cellSize}></TitleCell>)
        else if (j === 0)
          newField.push(<TitleCell text={i} width={cellSize} height={cellSize}></TitleCell>)
        else if (i !== 0 && j !== 0) 
          newField.push(<Cell type="grass" width={cellSize} height={cellSize}/>)
      }
    }

    return <div>
            <div style={FieldContainerStyle}>
              {newField}
            </div>
           </div>
  }
}

export default GameField;