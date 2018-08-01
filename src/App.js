import React, { Component } from 'react'

import TopBg from './assets/top-bg.png'
import StoryPreview from './assets/story-preview.png'
import UserAvatar from './assets/user-avatar.png'

class App extends Component {
  render() {
    return (
      <main>
        {/*<div className='stag__book' style={{*/}
          {/*fontSize: '17px'*/}
        {/*}}>*/}
          {/*Made last*/}
        {/*</div>*/}
        {/*<div className='stag__semibold' style={{*/}
          {/*fontSize: '30px'*/}
        {/*}}>*/}
          {/*The Road*/}
        {/*</div>*/}
        {/*<div className='stag__medium' style={{*/}
          {/*fontSize: '15px',*/}
          {/*color: '#b6b6b6'*/}
        {/*}}>*/}
          {/*June 18*/}
        {/*</div>*/}

      <div className='background'>
        <img className='background__image' src={TopBg} alt="story bg"/>
        <div className='background__color-box'/>
      </div>
      <div className='content'>
        {/*article started*/}
        <article className='article'>
          <h2 className='article__title'>The Road to Home</h2>
          <h4 className='article__date'>June 18, 2015</h4>

          <div className='article__text'>
            <p>Made last it seen went no just when of by. Occasional entreaties comparison me difficulty so themselves. At brother inquiry of offices without do my service. As particular to companions at sentiments. Weather however luckily enquire so certain do. Aware did stood was day under ask. Dearest affixed enquire on explain opinion he. Reached who the mrs joy offices pleased. Towards did colonel article any parties.</p>
            <img src={StoryPreview} alt="story preview"/>
            <p>Needed feebly dining oh talked wisdom oppose at. Applauded use attempted strangers now are middleton concluded had. It is tried no added purse shall no on truth. Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors. Her say projection age announcing decisively men. Few gay sir those green men timed downs widow chief. Prevailed remainder may propriety can and.  Now for manners use has company believe parlors. Least nor party who wrote while did.</p>

            <p>We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till. Of advantage he attending household at do perceived. Middleton in objection discovery as agreeable. Edward thrown dining so he my around to.</p>

            <p>Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing.</p>

            <p>Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors. Her say projection age announcing decisively men.</p>
          </div>

          <div className='article__summary'>
            <ul>
              <li>
                  Post by Will Smith
              </li>
              <li>
                  Posted June 18, 2015 at  21:14
              </li>
              <li>
                   12 comments
              </li>
            </ul>
          </div>
        </article>
        {/*article ended*/}

        {/*feedback form started*/}
        <section className="comments-feedback">
          <h2 className='comments-feedback__heading'>
            Leave comment:
          </h2>

          <form className='comments-feedback__form'>
            <img className='comments__author-avatar' src={UserAvatar} alt="username"/>
            <div className='comments-feedback__form-wrapper'>
              <textarea className='comments-feedback__textarea' cols="30" rows="10"/>
              <button className='comments-feedback__submit-button' type='submit'>Send</button>
            </div>
          </form>
        </section>
        {/*feedback form ended*/}

        {/*comments started*/}
        <ul className="comments-list">
          <li className='comments-item'>
            <div className="comments-item__main-wrapper">
              <img className='comments__author-avatar' src={UserAvatar} alt="username"/>

              <section className='comments-item__data'>
                <div className='comments-item__heading-wrapper'>
                  <h4 className='comments-item__author-name'>Kurt Thompson</h4>
                  <span className='comments-item__posted-date'>  2015-07-06 at  13:57</span>
                </div>
                <span className='comments-item__text'>If not everyone makes money blogging, why is blogging so popular?</span>
                <div className='comments-item__actions-wrapper'>
                  <button className='comments-item__action'>  Edit</button>
                  <button className='comments-item__action'>  Delete</button>
                  <button className='comments-item__action'>  Reply</button>
                </div>
              </section>
            </div>


            <ul className="comments-item__children">
              <li className='comments-item__child'>
                <img className='comments__author-avatar' src={UserAvatar} alt="username"/>

                <section className='comments-item__data'>
                  <div className='comments-item__heading-wrapper'>
                    <h4 className='comments-item__author-name'>Sarah Fleming</h4>
                    <h4 className='comments-item__author-name comments-item__author-name--replied'>Kurt Thompson</h4>
                    <span className='comments-item__posted-date'>  2015-07-06 at  13:57</span>
                  </div>
                  <span className='comments-item__text'>
                    A WordPress blog will stand out!
                  </span>
                </section>
              </li>
            </ul>
          </li>
        </ul>
        {/*comments ended*/}

        <div className='comments__load-container'>
          <button className='comments__load-button'>load more comments</button>
        </div>

      </div>

      </main>
    )
  }
}

export default App
