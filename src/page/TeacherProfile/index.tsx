import { faCamera, faCircleCheck, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './style.css'
export default function TeacherProfile() {
    return (
        <div className='teacher_profile'>
            <div className='teacher_profile_avatar'>
                <img src="./assets/images/avatar.png" alt="" />
                <h3>Ready</h3>
                <p>NGÀY THAM GIA: <span>2/6/2021</span></p>
            </div>
            <div className='teacher_profile_information'>
                <div className='teacher_profile_information_name'>
                    <div>
                        <span>Windy</span>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#00ff91", }} />
                    </div>
                    <button>Theo dõi</button>
                </div>
                <div className='teacher_profile_information_action'>
                    <div>
                        <p>SỐ NGƯỜI THEO DÕI</p><span>386 người</span>
                    </div>
                    <div>
                        <p>ĐÃ ĐƯỢC THUÊ</p><span>1580 giờ</span>
                    </div>
                    <div>
                        <p>TỶ LỆ HOÀN THÀNH</p><span>99.15 %</span>
                    </div>
                    <div>
                        <p>TÌNH TRẠNG THIẾT BỊ</p>
                        <div>
                            <FontAwesomeIcon icon={faCamera} />
                            <FontAwesomeIcon icon={faMicrophone} />
                        </div>
                    </div>
                </div>
                <div className='teacher_profile_information_subject'>
                    <p>Toán</p><p>Lý</p><p>Hóa</p><p>Văn</p><p>Anh</p>
                </div>
                <div className='teacher_profile_information_describe'>
                    <h4>Thông tin</h4>'
                    <div className='teacher_profile_information_describe_img'>
                        <div><img src="./assets/images/avatar.png" alt="" /></div>
                        <div><img src="./assets/images/avatar.png" alt="" /></div>
                        <div><img src="./assets/images/avatar.png" alt="" /></div>
                        <div><img src="./assets/images/avatar.png" alt="" /></div>
                        <div><img src="./assets/images/avatar.png" alt="" /></div>
                    </div>
                </div>
                <div className="teacher_profile_information_comment">
                    <img src="./assets/images/avatar.png" alt="" />
                    <div>
                        <span>Nguyễn Phương Thảo</span>
                        <p>02:58:52 23/9/2022</p>
                        <span>Thầy dậy siêu có tâm và rất đẹp trai</span>
                    </div>
                </div>
            </div>
            <div className='teacher_profile__price'>
                <span>80,000 đ/h</span>
            </div>
        </div>
    )
}
