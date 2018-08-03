import React from 'react'
import FeedbackForm from './FeedbackForm'

import { $axios, config } from '../../App'

class Feedback extends React.Component {
  addComment = content => {
    if (content === '') {
      alert('You must fill the input')
      return Promise.reject()
    }

    return $axios.post(`/pages/${config.email}/comments`, {
      content,
      parent: null,
    })
      .then(() => {
        alert('Comment was added')
        // in real project we can add such state management like Mobx or Redux and manage comments list
        // updating normally instead of reloading page, but I guess reloading is enough for a test project
        window.location.reload()
      })
      .catch(e => alert(e))
  }

  render() {
    return (
      <section className='comments-feedback'>
        <h2 className='comments-feedback__heading'>
          Leave comment:
        </h2>

        <FeedbackForm callback={this.addComment}/>
      </section>
    )
  }
}

export default Feedback
