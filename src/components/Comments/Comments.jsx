import React from 'react'
import { $axios, config } from '../../App'

import CommentsItem from './CommentsItem'

class Comments extends React.Component {
  constructor () {
    super()

    this.state = {
      comments: [],
      userId: 1,
      replyId: null,
    }
  }

  componentDidMount () {
    this.loadComments()
  }

  loadComments () {
    $axios.get(`/pages/${config.email}/comments`)
      .then(response => {
        this.setState({
          comments: response.data
        })
      })
  }

  openReplyForm = (replyId = null) => {
    this.setState({
      replyId
    })
  }

  render() {
    const {
      comments,
      userId,
    } = this.state

    return (
      <div>
        <ul className='comments-list'>
          {
            comments.map(comment =>
              <CommentsItem
                key={comment.id}
                comment={comment}
                userId={userId}
                replyId={this.state.replyId}
                openReplyForm={this.openReplyForm}
              />
            )
          }
        </ul>

        <div className='comments__load-container'>
          <button className='comments__load-button'>load more comments</button>
        </div>
      </div>
    )
  }
}

export default Comments
