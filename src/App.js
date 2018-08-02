import React, { Component } from 'react'

import TopBg from './assets/top-bg.png'
import StoryPreview from './assets/story-preview.png'
import UserAvatar from './assets/user-avatar.png'
import EyeIcon from './assets/eye-icon.png'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faComment, faEdit, faTimes, faReply, faShare } from '@fortawesome/free-solid-svg-icons'
import { faClock, far } from '@fortawesome/free-regular-svg-icons'

library.add(far, faUser, faClock, faComment, faEdit, faTimes, faReply, faShare)

class App extends Component {
  render() {
    return (
      <main className='main-wrapper'>
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
        <div className='background__image-wrapper'>
          <img className='background__image' src={TopBg} alt="story bg"/>
        </div>
        <div className='background__color-box'/>
      </div>
      <div className='content'>
        {/*article started*/}
        <article className='article'>
          <h2 className='article__title'>The Road to Home</h2>
          <h4 className='article__date'>June 18, 2015</h4>

          <div className='article__text'>
            <p>Made last it seen went no just when of by. Occasional entreaties comparison me difficulty so themselves. At brother inquiry of offices without do my service. As particular to companions at sentiments. Weather however luckily enquire so certain do. Aware did stood was day under ask. Dearest affixed enquire on explain opinion he. Reached who the mrs joy offices pleased. Towards did colonel article any parties.</p>
            <div className='article__image-wrapper'>
              <div className="article__image-filter">
                <img src={EyeIcon} alt="eye icon"/>
                <p>Photo by John Dou</p>
              </div>
              <img className='article__image' src={StoryPreview} alt="story preview"/>
            </div>
            <p>Needed feebly dining oh talked wisdom oppose at. Applauded use attempted strangers now are middleton concluded had. It is tried no added purse shall no on truth. Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors. Her say projection age announcing decisively men. Few gay sir those green men timed downs widow chief. Prevailed remainder may propriety can and.  Now for manners use has company believe parlors. Least nor party who wrote while did.</p>

            <p>We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state. Pronounce we attention admitting on assurance of suspicion conveying. That his west quit had met till. Of advantage he attending household at do perceived. Middleton in objection discovery as agreeable. Edward thrown dining so he my around to.</p>

            <p>Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing.</p>

            <p>Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors. Her say projection age announcing decisively men.</p>
          </div>

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
        </article>
        {/*article ended*/}

        {/*feedback form started*/}
        <section className="comments-feedback">
          <h2 className='comments-feedback__heading'>
            Leave comment:
          </h2>

          <form className='comments-feedback__form'>
            <div className='comments__author-wrapper'>
              <img className='comments__author-avatar' src={UserAvatar} alt="username"/>
            </div>
            <div className='comments-feedback__form-wrapper'>
              <textarea
                className='comments-feedback__textarea'
                cols="30" rows="10"
                placeholder='Your Message'
              />
              <button className='comments-feedback__submit-button' type='submit'>Send</button>
            </div>
          </form>
        </section>
        {/*feedback form ended*/}

        {/*comments started*/}
        <ul className="comments-list">
          <li className='comments-item'>
            <div className="comments-item__main-wrapper">
              <div className='comments__author-wrapper'>
                <img className='comments__author-avatar' src={UserAvatar} alt="username"/>
              </div>

              <section className='comments-item__data'>
                <div className='comments-item__heading-wrapper'>
                  <h4 className='comments-item__author-name'>Kurt Thompson</h4>
                  <span className='comments-item__posted-date'>
                    <FontAwesomeIcon icon={['far', 'clock']} />
                    <b>2015-07-06</b> at <b>13:57</b>
                  </span>
                </div>
                <span className='comments-item__text'>If not everyone makes money blogging, why is blogging so popular?</span>
                <div className='comments-item__actions-wrapper'>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon="edit"/> Edit
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon="times"/> Delete
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon="reply"/> Reply
                  </button>
                </div>
              </section>
            </div>

            <form className='comments-feedback__form comments-feedback__form--reply dn'>
              <div className='comments-feedback__form-actions'>
                <h4 className={`
                  comments-item__author-name comments-item__author-name--replied
                  comments-item__author-name--small
                `}>
                  <FontAwesomeIcon icon="share"/> Kurt Thompson
                </h4>
                <button className='comments-item__action'>
                  <FontAwesomeIcon icon="times"/> Cancel
                </button>
              </div>
              <div className='comments-feedback__form-wrapper'>
                <textarea
                  className='comments-feedback__textarea'
                  cols="30" rows="10"
                  placeholder='Your Message'
                />
                <button className='comments-feedback__submit-button' type='submit'>Send</button>
              </div>
            </form>

            <ul className="comments-item__children">
              <li className='comments-item comments-item--child'>
                <div className="comments-item__main-wrapper comments-item__main-wrapper--child">
                  <div className='comments__author-wrapper comments__author-wrapper--small'>
                    <img className='comments__author-avatar' src={UserAvatar} alt="username"/>
                  </div>

                  <section className='comments-item__data comments-item__data--small'>
                    <div className='comments-item__heading-wrapper'>
                      <h4 className='comments-item__author-name'>Sarah Fleming</h4>
                      <h4 className='comments-item__author-name comments-item__author-name--replied'>
                        <FontAwesomeIcon icon="share"/> Kurt Thompson
                      </h4>
                      <span className='comments-item__posted-date'>
                      <FontAwesomeIcon icon={['far', 'clock']} /> 2015-07-06 at 13:57
                    </span>
                    </div>
                    <span className='comments-item__text'>
                    A WordPress blog will stand out!
                  </span>
                  </section>
                </div>
              </li>
              <li className='comments-item comments-item--child'>
                <div className="comments-item__main-wrapper comments-item__main-wrapper--child">
                  <div className='comments__author-wrapper comments__author-wrapper--small'>
                    <img className='comments__author-avatar' src={UserAvatar} alt="username"/>
                  </div>

                  <section className='comments-item__data comments-item__data--small'>
                    <div className='comments-item__heading-wrapper'>
                      <h4 className='comments-item__author-name'>Purificacion Rojas</h4>
                      <h4 className='comments-item__author-name comments-item__author-name--replied'>
                        <FontAwesomeIcon icon="share"/> Kurt Thompson
                      </h4>
                      <span className='comments-item__posted-date'>
                      <FontAwesomeIcon icon={['far', 'clock']} /> 2015-07-06 at 13:57
                    </span>
                    </div>
                    <span className='comments-item__text'>
                    A WordPress blog will stand out!
                  </span>
                  </section>
                </div>
              </li>
              <li className='comments-item comments-item--child'>
                <div className="comments-item__main-wrapper comments-item__main-wrapper--child">
                  <div className='comments__author-wrapper comments__author-wrapper--small'>
                    <img className='comments__author-avatar' src={UserAvatar} alt="username"/>
                  </div>

                  <section className='comments-item__data comments-item__data--small'>
                    <div className='comments-item__heading-wrapper'>
                      <h4 className='comments-item__author-name'>Purificacion Rojas</h4>
                      <h4 className='comments-item__author-name comments-item__author-name--replied'>
                        <FontAwesomeIcon icon="share"/> Kurt Thompson
                      </h4>
                      <span className='comments-item__posted-date'>
                      <FontAwesomeIcon icon={['far', 'clock']} /> 2015-07-06 at 13:57
                    </span>
                    </div>
                    <span className='comments-item__text'>
                    A WordPress blog will stand out!
                  </span>
                  </section>
                </div>
              </li>
            </ul>
          </li>
          <li className='comments-item'>
            <div className="comments-item__main-wrapper">
              <div className='comments__author-wrapper'>
                <img className='comments__author-avatar' src={UserAvatar} alt="username"/>
              </div>

              <section className='comments-item__data'>
                <div className='comments-item__heading-wrapper'>
                  <h4 className='comments-item__author-name'>Kurt Thompson</h4>
                  <span className='comments-item__posted-date'>
                    <FontAwesomeIcon icon={['far', 'clock']} />
                    <b>2015-07-06</b> at <b>13:57</b>
                  </span>
                </div>
                <span className='comments-item__text'>If not everyone makes money blogging, why is blogging so popular?</span>
                <div className='comments-item__actions-wrapper'>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon="edit"/> Edit
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon="times"/> Delete
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon="reply"/> Reply
                  </button>
                </div>
              </section>
            </div>


            <ul className="comments-item__children">
              <li className='comments-item comments-item--child'>
                <div className="comments-item__main-wrapper comments-item__main-wrapper--child">
                  <div className='comments__author-wrapper comments__author-wrapper--small'>
                    <img className='comments__author-avatar' src={UserAvatar} alt="username"/>
                  </div>

                  <section className='comments-item__data comments-item__data--small'>
                    <div className='comments-item__heading-wrapper'>
                      <h4 className='comments-item__author-name'>Sarah Fleming</h4>
                      <h4 className='comments-item__author-name comments-item__author-name--replied'>
                        <FontAwesomeIcon icon="share"/> Kurt Thompson
                      </h4>
                      <span className='comments-item__posted-date'>
                      <FontAwesomeIcon icon={['far', 'clock']} /> 2015-07-06 at 13:57
                    </span>
                    </div>
                    <span className='comments-item__text'>
                    A WordPress blog will stand out!
                  </span>
                  </section>
                </div>
              </li>
            </ul>
          </li>
          <li className='comments-item'>
            <div className="comments-item__main-wrapper">
              <div className='comments__author-wrapper'>
                <img className='comments__author-avatar' src={UserAvatar} alt="username"/>
              </div>

              <section className='comments-item__data'>
                <div className='comments-item__heading-wrapper'>
                  <h4 className='comments-item__author-name'>Kurt Thompson</h4>
                  <span className='comments-item__posted-date'>
                    <FontAwesomeIcon icon={['far', 'clock']} />
                    <b>2015-07-06</b> at <b>13:57</b>
                  </span>
                </div>
                <span className='comments-item__text'>Each day I love you more my blog Today more than yesterday and less than tomorrow...</span>
                <div className='comments-item__actions-wrapper'>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon="edit"/> Edit
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon="times"/> Delete
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon="reply"/> Reply
                  </button>
                </div>
              </section>
            </div>
          </li>
          <li className='comments-item'>
            <div className="comments-item__main-wrapper">
              <div className='comments__author-wrapper'>
                <img className='comments__author-avatar' src={UserAvatar} alt="username"/>
              </div>

              <section className='comments-item__data'>
                <div className='comments-item__heading-wrapper'>
                  <h4 className='comments-item__author-name'>Kurt Thompson</h4>
                  <span className='comments-item__posted-date'>
                    <FontAwesomeIcon icon={['far', 'clock']} />
                    <b>2015-07-06</b> at <b>13:57</b>
                  </span>
                </div>
                <span className='comments-item__text'>Each day I love you more my blog Today more than yesterday and less than tomorrow...</span>
                <div className='comments-item__actions-wrapper'>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon="edit"/> Edit
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon="times"/> Delete
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon="reply"/> Reply
                  </button>
                </div>
              </section>
            </div>
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
