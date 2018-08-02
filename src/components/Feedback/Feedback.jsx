import React from 'react'
import FeedbackForm from './FeedbackForm'

class Feedback extends React.Component {
  render() {
    return (
      <section className='comments-feedback'>
        <h2 className='comments-feedback__heading'>
          Leave comment:
        </h2>

        <FeedbackForm/>
      </section>
    )
  }
}

export default Feedback
