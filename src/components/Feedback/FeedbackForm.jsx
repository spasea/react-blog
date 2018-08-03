import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import UserAvatar from '../../assets/user-avatar.png'

class FeedbackForm extends React.Component {
  constructor () {
    super()

    this.state = {
      formText: '',
      isLoading: false,
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

  handleSubmit = e => {
    e.preventDefault()

    const {
      formText,
    } = this.state

    const {
      callback
    } = this.props

    if (formText === '') {
      alert('You must fill the input')
      return
    }
    this.setState({
      isLoading: true
    })

    callback(formText)
      .finally(() => this.setState({
        isLoading: false,
        formText: '',
      }))
  }

  render() {
    const {
      isReply,
      replyTo,
      closeForm,
      isEdit,
    } = this.props

    const {
      isLoading,
      formText,
    } = this.state

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
                    disabled={isLoading}
                    value={formText}
                    onChange={this.typeText}
                    placeholder='Your Message'
                  />
          <button className='comments-feedback__submit-button' type='submit'
                  disabled={isLoading}
                  onClick={this.handleSubmit}
          >
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
  closeForm: () => '',
  callback: () => Promise.resolve()
}

export default FeedbackForm
