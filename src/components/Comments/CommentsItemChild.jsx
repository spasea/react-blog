import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import moment from 'moment'

class CommentsItemChild extends React.Component {
  render() {
    const {
      comment,
      parentComment,
    } = this.props

    const posted = moment(comment.created_at)

    return (
      <li className='comments-item comments-item--child'>
        <div className='comments-item__main-wrapper comments-item__main-wrapper--child'>
          <div className='comments__author-wrapper comments__author-wrapper--small'>
            <img className='comments__author-avatar' src={comment.author.avatar} alt={comment.author.name}/>
          </div>

          <section className='comments-item__data comments-item__data--small'>
            <div className='comments-item__heading-wrapper'>
              <h4 className='comments-item__author-name'>{comment.author.name}</h4>
              <h4 className='comments-item__author-name comments-item__author-name--replied'>
                <FontAwesomeIcon icon='share'/> {parentComment.author.name}
              </h4>
              <span className='comments-item__posted-date'>
                <FontAwesomeIcon icon={['far', 'clock']} />
                {posted.format('YYYY-MM-DD')} at {posted.format('HH:mm')}
              </span>
            </div>
            <span className='comments-item__text'>{comment.content}</span>
          </section>
        </div>
      </li>
    )
  }
}

export default CommentsItemChild
