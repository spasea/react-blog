import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ArticleFooter extends React.Component {
  render() {
    return (
      <ul className='article__summary'>
        <li className='article__summary-item'>
          <FontAwesomeIcon icon="user"/> Post by <b>Will Smith</b>
        </li>
        <li className='article__summary-item'>
          <FontAwesomeIcon icon={['far', 'clock']} /> Posted <b>June 18, 2015</b> at <b>21:14</b>
        </li>
        <li className='article__summary-item'>
          <FontAwesomeIcon icon="comment"/> <b>12 comments</b>
        </li>
      </ul>
    )
  }
}

export default ArticleFooter
