import React from 'react'
import UserAvatar from '../../assets/user-avatar.png'

class FeedbackForm extends React.Component {
  render() {
    return (
      <form className='comments-feedback__form'>
        <div className='comments__author-wrapper'>
          <img className='comments__author-avatar' src={UserAvatar} alt='username'/>
        </div>
        <div className='comments-feedback__form-wrapper'>
                <textarea
                  className='comments-feedback__textarea'
                  cols='30' rows='10'
                  placeholder='Your Message'
                />
          <button className='comments-feedback__submit-button' type='submit'>Send</button>
        </div>
      </form>
    )
  }
}

export default FeedbackForm
