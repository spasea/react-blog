import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <div className='stag__book' style={{
          fontSize: '17px'
        }}>
          Made last
        </div>
        <div className='stag__semibold' style={{
          fontSize: '30px'
        }}>
          The Road
        </div>
        <div className='stag__medium' style={{
          fontSize: '15px',
          color: '#b6b6b6'
        }}>
          June 18
        </div>
      </div>
    )
  }
}

export default App
