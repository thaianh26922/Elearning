import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBusinessTime, faChevronLeft, faChevronRight, faClock, faDatabase, faDesktop, faFilm, faObjectUngroup, faPencil, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export default function Course() {
  return (
    <div className='coursePage'>
      <div>
        <div className='history-banner course'>
          <div className='course-recent'><p>Welcome back, ready for your next lesson?</p><p>View history</p></div>
          <div className='course-recent-items'>
            <div className='course-recent-item'>
              <div className="banners"><img src="./assets/images/banner.png" alt="" /></div>
              <p>AWS Certified Solutions Architect</p>
              <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
              <div className='range'><span></span></div>
              <div className='lesson'><p>Lesson 5 of 7</p></div>
            </div>
            <div className='course-recent-item'>
              <div className="banners"><img src="./assets/images/banner.png" alt="" /></div>
              <p>AWS Certified Solutions Architect</p>
              <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
              <div className='range'><span></span></div>
              <div className='lesson'><p>Lesson 5 of 7</p></div>
            </div>
            <div className='course-recent-item'>
              <div className="banners"><img src="./assets/images/banner.png" alt="" /></div>
              <p>AWS Certified Solutions Architect</p>
              <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
              <div className='range'><span></span></div>
              <div className='lesson'><p>Lesson 5 of 7</p></div>
            </div>

          </div>
          <div className='slider-button'>
            <div className='chevronleft'><FontAwesomeIcon icon={faChevronLeft} /></div>
            <div className='chevronright'><FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
        </div>
        <div className='choice-favorite course'>
          <div className='course-recent'><p>Choice favourite course from top category</p></div>
          <div className='favorite-items'>
            <div className='favorite-item'>
              <div ><FontAwesomeIcon className='favorite-item-font' icon={faPencil} style={{ color: "#259832", }} /></div>
              <p>Design</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
            </div>
            <div className='favorite-item'>
              <div ><FontAwesomeIcon className='favorite-item-font' icon={faDesktop} style={{ color: "#ec36e6", }} /></div>
              <p>Development  </p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
            </div>
            <div className='favorite-item'>
              <div ><FontAwesomeIcon className='favorite-item-font' icon={faDatabase} style={{ color: "#3b7ae8", }} /></div>
              <p>Development</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
            </div>
            <div className='favorite-item'>
              <div ><FontAwesomeIcon className='favorite-item-font' icon={faBusinessTime} style={{ color: "#259832", }} /></div>
              <p>Business</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
            </div>
            <div className='favorite-item'>
              <div ><FontAwesomeIcon className='favorite-item-font' icon={faSquarePollVertical} style={{ color: "#ff7b00", }} /></div>
              <p>Marketing</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
            </div>
            <div className='favorite-item'>
              <div ><FontAwesomeIcon className='favorite-item-font' icon={faBook} style={{ color: "#ff85e9", }} /></div>
              <p>Photography</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
            </div>
            <div className='favorite-item'>
              <div ><FontAwesomeIcon className='favorite-item-font' icon={faFilm} style={{ color: "#a8a8a8", }} /></div>
              <p>Acting</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
            </div>
            <div className='favorite-item'>
              <div ><FontAwesomeIcon className='favorite-item-font' icon={faBusinessTime} style={{ color: "#259832", }} /></div>
              <p>Design</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</span>
            </div>

          </div>

        </div>
        <div className="recomendation course">
          <div className='course-recent'><p>Recommended for you</p><p>See all</p></div>
          <div>
            <div className='marketing-articals-items'>
              <div className='marketing-item'>
                <img className='marketing-item-img' src="./assets/images/marketing-item 3.png" alt="" />
                <div className='font-design'>
                  <div>
                    <FontAwesomeIcon icon={faObjectUngroup} beat size="sm" style={{ color: "#6e8ff2", }} />
                    <p> <Link to={`/courseDetail/1`}>Design</Link></p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} beat style={{ color: "#a28181", }} />
                    <p>3 Month</p>
                  </div>
                </div>
                <span>AWS Certified solutions Architect</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
              </div>
              <div className='marketing-item'>
                <img className='marketing-item-img' src="./assets/images/marketing-item 2.png" alt="" />
                <div className='font-design'>
                  <div>
                    <FontAwesomeIcon icon={faObjectUngroup} beat size="sm" style={{ color: "#6e8ff2", }} />
                    <p>Design</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} beat style={{ color: "#a28181", }} />
                    <p>3 Month</p>
                  </div>
                </div>
                <span>AWS Certified solutions Architect</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
              </div>
              <div className='marketing-item'>
                <img className='marketing-item-img' src="./assets/images/banner.png" alt="" />
                <div className='font-design'>
                  <div>
                    <FontAwesomeIcon icon={faObjectUngroup} beat size="sm" style={{ color: "#6e8ff2", }} />
                    <p>Design</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} beat style={{ color: "#a28181", }} />
                    <p>3 Month</p>
                  </div>
                </div>
                <span>AWS Certified solutions Architect</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
              </div>
              <div className='marketing-item'>
                <img className='marketing-item-img' src="./assets/images/marketing-item.png" alt="" />
                <div className='font-design'>
                  <div>
                    <FontAwesomeIcon icon={faObjectUngroup} beat size="sm" style={{ color: "#6e8ff2", }} />
                    <p>Design</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} beat style={{ color: "#a28181", }} />
                    <p>3 Month</p>
                  </div>
                </div>
                <span>AWS Certified solutions Architect</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="getchoice course">
          <div className='course-recent'><p>Recommended for you</p><p>See all</p></div>
          <div>
            <div className='marketing-articals-items'>
              <div className='marketing-item'>
                <img className='marketing-item-img' src="./assets/images/marketing-item 3.png" alt="" />
                <div className='font-design'>
                  <div>
                    <FontAwesomeIcon icon={faObjectUngroup} beat size="sm" style={{ color: "#6e8ff2", }} />
                    <p>Design</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} beat style={{ color: "#a28181", }} />
                    <p>3 Month</p>
                  </div>
                </div>
                <span>AWS Certified solutions Architect</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
              </div>
              <div className='marketing-item'>
                <img className='marketing-item-img' src="./assets/images/marketing-item 2.png" alt="" />
                <div className='font-design'>
                  <div>
                    <FontAwesomeIcon icon={faObjectUngroup} beat size="sm" style={{ color: "#6e8ff2", }} />
                    <p>Design</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} beat style={{ color: "#a28181", }} />
                    <p>3 Month</p>
                  </div>
                </div>
                <span>AWS Certified solutions Architect</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
              </div>
              <div className='marketing-item'>
                <img className='marketing-item-img' src="./assets/images/banner.png" alt="" />
                <div className='font-design'>
                  <div>
                    <FontAwesomeIcon icon={faObjectUngroup} beat size="sm" style={{ color: "#6e8ff2", }} />
                    <p>Design</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} beat style={{ color: "#a28181", }} />
                    <p>3 Month</p>
                  </div>
                </div>
                <span>AWS Certified solutions Architect</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
              </div>
              <div className='marketing-item'>
                <img className='marketing-item-img' src="./assets/images/marketing-item.png" alt="" />
                <div className='font-design'>
                  <div>
                    <FontAwesomeIcon icon={faObjectUngroup} beat size="sm" style={{ color: "#6e8ff2", }} />
                    <p>Design</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} beat style={{ color: "#a28181", }} />
                    <p>3 Month</p>
                  </div>
                </div>
                <span>AWS Certified solutions Architect</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
