import React from 'react'
import { faChevronLeft, faChevronRight, faClock, faCloud, faCube, faObjectUngroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css'
export default function Blog() {
    return (
        <div>
            <div className='banner'>
                <div className='banner-description'>
                    <div className='banner-description-header'><p>By Themadbrains in <span>inspiration</span></p></div>
                    <div className='banner-description-title'><p>Why Swift UI Should Be on the Radar of Every Mobile Developer</p></div>
                    <div className='banner-description-detail'><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</span></div>
                    <div className='banner-description-button'>
                        <button>Start learning now</button>
                    </div>
                </div>
                <div className='banner-img'>
                    <img src="./assets/images/banner.png" alt="" />
                </div>
            </div>
            <div className='blog-list'>
                <h3>Reading blog list</h3>
                <div className='blog-list-img'>
                    <div><img src="./assets/images/uxui.png" alt="" /></div>
                    <div><img src="./assets/images/react.png" alt="" /></div>
                    <div><img src="./assets/images/Php.png" alt="" /></div>
                    <div><img src="./assets/images/Js.png" alt="" /></div>
                </div>
            </div>
            <div className='rated-blog'>
                <div className='rated-blog-title'><p>Related Blog</p><p>See all</p></div>
                <div className='slider-blog'>
                    <div className='rated-blog-item'>
                        <div className='rated-blog-item-img'><img src="./assets/images/rate-blog1.png" alt="" /></div>
                        <div className='rated-blog-item-price'><h4>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h4></div>
                        <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
                        <div className='rated-blog-item-describe'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</div>
                        <div><a href="">Read more</a></div>
                    </div>
                    <div className='rated-blog-item'>
                        <div className='rated-blog-item-img'><img src="./assets/images/banner.png" alt="" /></div>
                        <div className='rated-blog-item-price'><h4>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h4></div>
                        <div className='avatar'><img src="./assets/images/avatar.png" alt="" /><p>Lina</p></div>
                        <div className='rated-blog-item-describe'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</div>
                        <div><a href="">Read more</a></div>
                    </div>
                </div>
                <div className='slider-button'>
                    <div className='chevronleft'><FontAwesomeIcon icon={faChevronLeft} /></div>
                    <div className='chevronright'><FontAwesomeIcon icon={faChevronRight} /></div>
                </div>
            </div>
            <div className='marketing-articals'>
                <div className='rated-blog-title'><p>Marketing Articles</p><p>See all</p></div>
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
    )
}
