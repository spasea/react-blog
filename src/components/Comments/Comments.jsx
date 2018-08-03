import React from 'react'
import { $axios, config } from '../../App'

import CommentsItem from './CommentsItem'

class Comments extends React.Component {
  constructor () {
    super()

    this.state = {
      comments: [],
      count: 5,
      offset: 0,
      userId: 1,
      commentsExists: true,
      replyId: null,
      isLoading: false,
    }
  }

  componentDidMount () {
    this.loadComments()
  }

  loadComments = () => {
    const {
      count,
      offset,
      comments,
      commentsExists,
    } = this.state

    if (!commentsExists) return

    this.setState({
      isLoading: true,
    })

    let _commentsExists = true
    $axios.get(`/pages/${config.email}/comments`, {
        params: {
          count,
          offset,
        }
      })
      .then(response => {
        if (!response.data.length || response.data.length < count) {
          _commentsExists = !_commentsExists
        }

        this.setState({
          comments: [
            ...comments,
            ...response.data,
          ],
          offset: offset + count,
          isLoading: false,
          commentsExists: _commentsExists
        })
      })
      .catch(e => alert(e))
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
      isLoading,
      commentsExists,
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

        {
          commentsExists && (
            <div className='comments__load-container'>
              <button className='comments__load-button'
                      disabled={isLoading}
                      onClick={this.loadComments}
              >
                load more comments
              </button>
            </div>
          )
        }
      </div>
    )
  }
}

export default Comments
