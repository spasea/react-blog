import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import FeedbackForm from '../Feedback/FeedbackForm'
import CommentsItemChild from './CommentsItemChild'
import { $axios, config } from '../../App'

class CommentsItem extends React.Component {
  constructor () {
    super()

    this.state = {
      isEdit: false,
      formText: '',
      comment: null,
    }
  }

  componentDidMount () {
    this.setState({
      comment: this.props.comment
    })
  }

  editComment = content => {
    const edit = async () => {
      await $axios.put(`/pages/${config.email}/comments/${this.state.comment.id}`, {
        content
      })
      return $axios.get(`/pages/${config.email}/comments/${this.state.comment.id}`)
        .then(response => {
          this.setState({
            comment: {
              ...response.data,
              children: this.state.comment.children,
            }
          })
          this.props.openReplyForm()
          alert('Edited')
        })
        .catch(e => alert(e))
    }

    return edit()
  }

  render() {
    const {
      userId,
      openReplyForm,
      replyId,
    } = this.props

    const {
      comment,
    } = this.state

    return (
      comment && (
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
                  <b>{moment(comment.created_at).format('YYYY-MM-DD')}</b> at <b>{moment(comment.created_at).format('HH:mm')}</b>
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
                callback={this.editComment}
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
    )
  }
}

export default CommentsItem
