import React from 'react'
import '../App.css'

class Log extends React.Component {
  render() {
    return <div className='Log'>
            <div className="Log-title" style={{height: '79px'}}>
              <h2>История ходов</h2>
            </div>
          
            <div className="Log-container">
              <h2>Тут будет история ходов</h2>
            </div>
          </div>
  }
}

export default Log;