import React, { useState } from 'react'
import './style.css'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { GetUsers, login } from '../../api/user.api';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectToken, setToken } from '../../features/counter/tokenSlice';
import QRCode from 'qrcode.react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const queryClient = useQueryClient();
  // const { data, isLoading } = useQuery(['users'], () => GetUsers());
  const { mutate: mutation, isLoading: isMutating } = useMutation({
    mutationFn: () => login(username, password),
    onSuccess: (data) => {
      dispatch(setToken(data.data))
      if (data.data.length > 0) {
        navigate('/');
      }
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      console.log(err);

    }
  });
  const HandleLogin = () => {
    console.log(token);
    mutation();
    
  }
  const qr = {
    userName: "some_normalized_user_name",
    code: null,
    isTfaEnabled: true,
    authenticatorKey: "GE5MYB4BD6CYWJBE4ILCKQCMAEEW37WA",
    formattedKey: "otpauth://totp/Test%20Two%20Factor:thaianhdeptrai?secret=IFAUCQKBIFAUCQKB&issuer=Test%20Two%20Factor&digits=6"
  }


  return (
    <div className='login-page'>
      <div>
        <p>User name</p>
        <input type="text" placeholder='Enter your User name' onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <div>
        <p>Password</p>
        <input type="password" placeholder='Enter your User name' onChange={(e) => setPassword(e.target.value)}/>
      </div>
      {/* <div>
        <p>Enter code</p>
        <input type="number" placeholder='Enter your Code' />
      </div> */}
      <div className='remember-forgot'>
        <div className='remember'><input type="checkbox" name="" id="" /><p>Remember me</p></div>
        <p>Forgot password</p>
      </div>
      <div className='option-login'>
        <div className='login-social'>
          <div>
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#49BBBD", }} />
            <p>Login with Facebook</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faGoogle} style={{ color: "#49BBBD", }} />
            <p>Login with Google</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCamera} style={{ color: "#49BBBD", }} />
            <p><Link to={'/faceId'}>Login with FaceID</Link></p>
          </div>
        </div>
        <div className='login-button'>
          <button onClick={HandleLogin}>Login</button>
        </div>
      </div>
      {/* <QRCode value={qr.formattedKey} /> */}
    </div>
  )
}
