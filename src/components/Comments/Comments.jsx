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
    } = this.state

    this.setState({
      isLoading: true,
    })

    $axios.get(`/pages/${config.email}/comments`, {
        params: {
          count,
          offset,
        }
      })
      .then(response => {
        this.setState({
          comments: [
            ...comments,
            ...response.data,
          ],
          offset: offset + count,
          isLoading: false,
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
          <button className='comments__load-button'
                  disabled={isLoading}
                  onClick={this.loadComments}
          >
            load more comments
          </button>
        </div>
      </div>
    )
  }
}

export default Comments
