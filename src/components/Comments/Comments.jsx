import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { $axios, config } from '../../App'

import UserAvatar from '../../assets/user-avatar.png'

class Comments extends React.Component {
  constructor () {
    super()

    this.state = {
      comments: []
    }
  }

  componentDidMount () {
    this.loadComments()
  }

  loadComments () {
    // $axios.get(`/pages/${config.email}/comments`)
    //   .then(data => {
    //     this.setState({
    //       comments: data.response
    //     })
    //   })
  }

  render() {
    return (
      <div>
        <ul className='comments-list'>
          <li className='comments-item'>
            <div className='comments-item__main-wrapper'>
              <div className='comments__author-wrapper'>
                <img className='comments__author-avatar' src={UserAvatar} alt='username'/>
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
                    <FontAwesomeIcon icon='edit'/> Edit
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon='times'/> Delete
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon='reply'/> Reply
                  </button>
                </div>
              </section>
            </div>

            <form className='comments-feedback__form comments-feedback__form--reply'>
              <div className='comments-feedback__form-actions'>
                <h4 className={`
                    comments-item__author-name comments-item__author-name--replied
                    comments-item__author-name--small
                  `}>
                  <FontAwesomeIcon icon='share'/> Kurt Thompson
                </h4>
                <button className='comments-item__action'>
                  <FontAwesomeIcon icon='times'/> Cancel
                </button>
              </div>
              <div className='comments-feedback__form-wrapper'>
                  <textarea
                    className='comments-feedback__textarea'
                    cols='30' rows='10'
                    placeholder='Your Message'
                  />
                <button className='comments-feedback__submit-button' type='submit'>Send</button>
              </div>
            </form>

            <ul className='comments-item__children'>
              <li className='comments-item comments-item--child'>
                <div className='comments-item__main-wrapper comments-item__main-wrapper--child'>
                  <div className='comments__author-wrapper comments__author-wrapper--small'>
                    <img className='comments__author-avatar' src={UserAvatar} alt='username'/>
                  </div>

                  <section className='comments-item__data comments-item__data--small'>
                    <div className='comments-item__heading-wrapper'>
                      <h4 className='comments-item__author-name'>Sarah Fleming</h4>
                      <h4 className='comments-item__author-name comments-item__author-name--replied'>
                        <FontAwesomeIcon icon='share'/> Kurt Thompson
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
                <div className='comments-item__main-wrapper comments-item__main-wrapper--child'>
                  <div className='comments__author-wrapper comments__author-wrapper--small'>
                    <img className='comments__author-avatar' src={UserAvatar} alt='username'/>
                  </div>

                  <section className='comments-item__data comments-item__data--small'>
                    <div className='comments-item__heading-wrapper'>
                      <h4 className='comments-item__author-name'>Purificacion Rojas</h4>
                      <h4 className='comments-item__author-name comments-item__author-name--replied'>
                        <FontAwesomeIcon icon='share'/> Kurt Thompson
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
                <div className='comments-item__main-wrapper comments-item__main-wrapper--child'>
                  <div className='comments__author-wrapper comments__author-wrapper--small'>
                    <img className='comments__author-avatar' src={UserAvatar} alt='username'/>
                  </div>

                  <section className='comments-item__data comments-item__data--small'>
                    <div className='comments-item__heading-wrapper'>
                      <h4 className='comments-item__author-name'>Purificacion Rojas</h4>
                      <h4 className='comments-item__author-name comments-item__author-name--replied'>
                        <FontAwesomeIcon icon='share'/> Kurt Thompson
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
            <div className='comments-item__main-wrapper'>
              <div className='comments__author-wrapper'>
                <img className='comments__author-avatar' src={UserAvatar} alt='username'/>
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
                    <FontAwesomeIcon icon='edit'/> Edit
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon='times'/> Delete
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon='reply'/> Reply
                  </button>
                </div>
              </section>
            </div>


            <ul className='comments-item__children'>
              <li className='comments-item comments-item--child'>
                <div className='comments-item__main-wrapper comments-item__main-wrapper--child'>
                  <div className='comments__author-wrapper comments__author-wrapper--small'>
                    <img className='comments__author-avatar' src={UserAvatar} alt='username'/>
                  </div>

                  <section className='comments-item__data comments-item__data--small'>
                    <div className='comments-item__heading-wrapper'>
                      <h4 className='comments-item__author-name'>Sarah Fleming</h4>
                      <h4 className='comments-item__author-name comments-item__author-name--replied'>
                        <FontAwesomeIcon icon='share'/> Kurt Thompson
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
            <div className='comments-item__main-wrapper'>
              <div className='comments__author-wrapper'>
                <img className='comments__author-avatar' src={UserAvatar} alt='username'/>
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
                    <FontAwesomeIcon icon='edit'/> Edit
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon='times'/> Delete
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon='reply'/> Reply
                  </button>
                </div>
              </section>
            </div>
          </li>
          <li className='comments-item'>
            <div className='comments-item__main-wrapper'>
              <div className='comments__author-wrapper'>
                <img className='comments__author-avatar' src={UserAvatar} alt='username'/>
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
                    <FontAwesomeIcon icon='edit'/> Edit
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon='times'/> Delete
                  </button>
                  <button className='comments-item__action'>
                    <FontAwesomeIcon icon='reply'/> Reply
                  </button>
                </div>
              </section>
            </div>
          </li>
        </ul>

        <div className='comments__load-container'>
          <button className='comments__load-button'>load more comments</button>
        </div>
      </div>
    )
  }
}

export default Comments
