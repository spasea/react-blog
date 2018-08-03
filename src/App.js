import React, { Component } from 'react'
import axios from 'axios'
import objectFitImages from 'object-fit-images'

import Article from './components/Article/Article'
import Background from './components/Background/Background'
import Comments from './components/Comments/Comments'
import Feedback from './components/Feedback/Feedback'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faComment, faEdit, faTimes, faReply, faShare } from '@fortawesome/free-solid-svg-icons'
import { faClock, far } from '@fortawesome/free-regular-svg-icons'

library.add(far, faUser, faClock, faComment, faEdit, faTimes, faReply, faShare)

class App extends Component {
  componentDidMount () {
    objectFitImages()
  }

  render() {
    return (
      <main className='main-wrapper'>
        <Background />

        <div className='content'>

          <Article/>
          <Feedback/>
          <Comments/>

        </div>

      </main>
    )
  }
}

export default App

export const $axios = axios.create({
  baseURL: 'http://frontend-test.pingbull.com'
})

export const config = {
  email: 'ithespv@gmail.com'
}
