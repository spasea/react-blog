import React from 'react'

import ArticleHeading from './ArticleHeading'
import ArticleBody from './ArticleBody'
import ArticleFooter from './ArticleFooter'

class Article extends React.Component {
  render() {
    return (
      <article className='article'>
        <ArticleHeading/>
        <ArticleBody/>
        <ArticleFooter/>
      </article>
    )
  }
}

export default Article
