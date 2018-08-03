import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import UserAvatar from '../../assets/user-avatar.png'

class FeedbackForm extends React.Component {
  constructor () {
    super()

    this.state = {
      formText: ''
    }
  }

  componentDidMount () {
    this.changeInput(this.props.startText)
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.startText !== this.props.startText) {
      this.changeInput(nextProps.startText)
    }
  }

  changeInput = formText => {
    this.setState({
      formText
    })
  }

  typeText = e => {
    this.changeInput(e.target.value)
  }

  render() {
    const {
      isReply,
      replyTo,
      closeForm,
      isEdit,
    } = this.props

    return (
      <form className={`comments-feedback__form ${isReply && 'comments-feedback__form--reply'}`}>
        {
          isReply ? (
            <div className='comments-feedback__form-actions'>
              <h4 className={`
                    comments-item__author-name comments-item__author-name--replied
                    comments-item__author-name--small
                  `}>
                <FontAwesomeIcon icon='share'/> {replyTo}
              </h4>
              <button className='comments-item__action' onClick={closeForm}>
                <FontAwesomeIcon icon='times'/> Cancel
              </button>
            </div>
          ) : (
            <div className='comments__author-wrapper'>
              <img className='comments__author-avatar' src={UserAvatar} alt='username'/>
            </div>
          )
        }
        <div className='comments-feedback__form-wrapper'>
                  <textarea
                    className='comments-feedback__textarea'
                    cols='30' rows='10'
                    value={this.state.formText}
                    onChange={this.typeText}
                    placeholder='Your Message'
                  />
          <button className='comments-feedback__submit-button' type='submit'>
            { isEdit ? 'Edit' : 'Send'}
          </button>
        </div>
      </form>
    )
  }
}

FeedbackForm.defaultProps = {
  isReply: false,
  isEdit: false,
  startText: '',
  replyTo: '',
  closeForm: () => ''
}

export default FeedbackForm
