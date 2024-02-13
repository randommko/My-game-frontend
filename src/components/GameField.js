import React from 'react'
import '../App.css'

import grassImg from "../img/grass.jpg"
import orcImg from "../img/orc.png"
import humanImg from "../img/human.jpg"

class GameField extends React.Component {
  render() {
    return <>
            <div className="Field-title">
              <h2>Игровое поле</h2>
            </div>
            <div className="Field-container" >
            <div> </div>
                <div className="title_cell"> 1 </div>
                <div className="title_cell"> 2 </div>
                <div className="title_cell"> 3 </div>
                <div className="title_cell"> 4 </div>
                <div className="title_cell"> 5 </div>
                <div className="title_cell"> 6 </div>
                <div className="title_cell"> 7 </div>
                <div className="title_cell"> 8 </div>

                <div className="title_cell"> 1 </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>

                <div className="title_cell"> 2 </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={orcImg} title="Orc"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>

                <div className="title_cell"> 3 </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>

                <div className="title_cell"> 4 </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>

                <div className="title_cell"> 5 </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>

                <div className="title_cell"> 6 </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={humanImg} title="Human"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>

                <div className="title_cell"> 7 </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>

                <div className="title_cell"> 8 </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
                <div className="cell"> <img className="cell" src={grassImg} title="Grass"/> </div>
            </div>
            
          </>
  }
}

export default GameField;