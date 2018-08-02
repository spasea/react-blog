import React from 'react'
import TopBg from '../../assets/top-bg.png'

class Background extends React.Component {
  render() {
    return (
      <div className='background'>
        <div className='background__image-wrapper'>
          <img className='background__image' src={TopBg} alt='story bg'/>
        </div>
        <div className='background__color-box'/>
      </div>
    )
  }
}

export default Background
