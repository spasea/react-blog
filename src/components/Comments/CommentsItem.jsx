import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import FeedbackForm from '../Feedback/FeedbackForm'
import CommentsItemChild from './CommentsItemChild'

class CommentsItem extends React.Component {
  constructor () {
    super()

    this.state = {
      isEdit: false,
      formText: '',
    }
  }

  render() {
    const {
      comment,
      userId,
      openReplyForm,
      replyId,
    } = this.props

    const posted = moment(comment.created_at)

    return (
      <li className='comments-item'>
        <div className='comments-item__main-wrapper'>
          <div className='comments__author-wrapper'>
            <img className='comments__author-avatar' src={comment.author.avatar} alt={comment.author.name}/>
          </div>

          <section className='comments-item__data'>
            <div className='comments-item__heading-wrapper'>
              <h4 className='comments-item__author-name'>{comment.author.name}</h4>
              <span className='comments-item__posted-date'>
                      <FontAwesomeIcon icon={['far', 'clock']} />
                      <b>{posted.format('YYYY-MM-DD')}</b> at <b>{posted.format('HH:mm')}</b>
                    </span>
            </div>
            <span className='comments-item__text'>
              {comment.content}
            </span>
            <div className='comments-item__actions-wrapper'>
              {
                +comment.author.id === userId && (
                  <button className='comments-item__action' onClick={() => {
                    this.setState({
                      isEdit: true
                    }, () => {
                      openReplyForm(comment.id)
                    })
                  }}>
                    <FontAwesomeIcon icon='edit'/> Edit
                  </button>
                )
              }
              {
                +comment.author.id === userId && (
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon='times'/> Delete
                  </button>
                )
              }
              <button className='comments-item__action' onClick={() => {
                this.setState({
                  isEdit: false,
                }, () => {
                  openReplyForm(comment.id)
                })
              }}>
                <FontAwesomeIcon icon='reply'/> Reply
              </button>
            </div>
          </section>
        </div>

        {
          +comment.id === +replyId && (
            <FeedbackForm
              isReply={true}
              replyTo={comment.author.name}
              closeForm={openReplyForm}
              isEdit={this.state.isEdit}
              startText={this.state.isEdit ? comment.content : ''}
            />
          )
        }

        {
          !!comment.children.length && (
            <ul className='comments-item__children'>
              {
                comment.children.map(child =>
                  <CommentsItemChild key={child.id} comment={child} parentComment={comment}/>)
              }
            </ul>
          )
        }
      </li>
    )
  }
}

export default CommentsItem
