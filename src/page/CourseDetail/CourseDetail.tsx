import React from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faFile, faGear, faLayerGroup, faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSquareInstagram, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight, faClock, faCloud, faCube, faObjectUngroup } from '@fortawesome/free-solid-svg-icons';

// import { useParams } from 'react-router-dom';
export default function CourseDetail() {
    return (
        <div>
            <div className='banners'>
                <img src="../assets/images/bandetail.png" alt="" />
            </div>
            <div className='over-view'>
                <div className='over-view-left'>
                    <div className='over-view-left-top'>
                        <button>Overview</button>
                        <button>Overview</button>
                        <button>Overview</button>
                        <button>Overview</button>
                    </div>
                    <div className='over-view-left-bot'>
                        <div className='rating'>
                            <div className='rating-top'>
                                <div className='rating-top-star'>
                                    <span>4 out of 5</span>
                                    <div className='star'>
                                        <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                        <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                        <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                        <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                        <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                    </div>
                                    <p>Rating</p>
                                </div>
                                <div className='rating-top-range'>
                                    <div className='rate-range'>
                                        <p>5 Stars</p>
                                        <div className='range'><span></span></div>
                                    </div>
                                    <div className='rate-range'>
                                        <p>4 Stars</p>
                                        <div className='range'><span></span></div>
                                    </div>
                                    <div className='rate-range'>
                                        <p>3 Stars</p>
                                        <div className='range'><span></span></div>
                                    </div>
                                    <div className='rate-range'>
                                        <p>2 Stars</p>
                                        <div className='range'><span></span></div>
                                    </div>
                                    <div className='rate-range'>
                                        <p>1 Stars</p>
                                        <div className='range'><span></span></div>
                                    </div>
                                </div>
                            </div>
                            <div className='rating-comment'>
                                <div className='avatar'>
                                    <img src="../assets/images/avatar.png" alt="" />
                                    <div>
                                        <p>Lina</p>
                                        <div className='star-avatar'>
                                            <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                            <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                            <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                            <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                            <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                        </div>
                                    </div>
                                </div>
                                <div className='class-description'>
                                    <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                                </div>
                            </div>
                            <div className='rating-comment'>
                                <div className='avatar'>
                                    <img src="../assets/images/avatar.png" alt="" />
                                    <div>
                                        <p>Lina</p>
                                        <div className='star-avatar'>
                                            <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                            <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                            <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                            <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                            <FontAwesomeIcon icon={faStar} beatFade style={{ color: "#FDB022", }} />
                                        </div>
                                    </div>
                                </div>
                                <div className='class-description'>
                                    <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="over-view-right">
                    <div className='over-view-right-price'>
                        <img src="../assets/images/bandetail.png" alt="" />
                        <div className='price'><span>$49.65</span><p> $99.99</p><p> 50% Off</p></div>
                        <div className='over-view-current'><p>11 hour left at this price</p></div>
                        <button>Buy Now</button>
                    </div>
                    <div className='course-included'>
                        <h3>This Course included</h3>
                        <div><FontAwesomeIcon icon={faGear} style={{ color: "#00ff40", }} /> <p>Money Back Guarantee</p></div>
                        <div><FontAwesomeIcon icon={faCamera} style={{ color: "#00ff6e", }} /> <p>Access on all devices</p></div>
                        <div><FontAwesomeIcon icon={faFile} style={{ color: "#00ff40", }} /> <p>Certification of completion</p></div>
                        <div><FontAwesomeIcon icon={faLayerGroup} style={{ color: "#00ff40", }}/><p>32 Modules</p></div>
                    </div>
                    <div className='training'>
                        <h3>Training 5 or more people</h3>
                        <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    </div>
                    <div>
                        <h3>Share this course</h3>
                        <div className='social'>
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faYoutube} />
                            <FontAwesomeIcon icon={faSquareInstagram} />
                            <FontAwesomeIcon icon={faTelegram} />
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='marketing-artical'>
                <div className='rated-blog-title'><p>Marketing Articles</p><p>See all</p></div>
                <div className='marketing-articals-items'>
                    <div className='marketing-item'>
                        <img className='marketing-item-img' src="../assets/images/marketing-item 3.png" alt="" />
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
                        <div className='avatar'><img src="../assets/images/avatar.png" alt="" /><p>Lina</p></div>
                    </div>
                    <div className='marketing-item'>
                        <img className='marketing-item-img' src="../assets/images/marketing-item 2.png" alt="" />
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
                        <div className='avatar'><img src="../assets/images/avatar.png" alt="" /><p>Lina</p></div>
                    </div>
                    <div className='marketing-item'>
                        <img className='marketing-item-img' src="../assets/images/banner.png" alt="" />
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
                        <div className='avatar'><img src="../assets/images/avatar.png" alt="" /><p>Lina</p></div>
                    </div>
                    <div className='marketing-item'>
                        <img className='marketing-item-img' src="../assets/images/marketing-item.png" alt="" />
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
                        <div className='avatar'><img src="../assets/images/avatar.png" alt="" /><p>Lina</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
