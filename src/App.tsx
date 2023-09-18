import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import DefaultLayout from './DefaultLayout';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Home from './page/Home';
import Course from './page/Course/Course';
import { useAppSelector } from './app/hooks';
import Blog from './page/Blog';
import Careers from './page/Careers';
import Contact from './page/Contact';
import CourseDetail from './page/CourseDetail/CourseDetail';
import Register from './page/Register';
import DefaultLogin from './DefaultLogin';
import { selectToken } from './features/counter/tokenSlice';
import TeacherProfile from './page/TeacherProfile';
import FaceIDLogin from './page/FaceIDLogin';

function App() {
  const token = useAppSelector(selectToken);
console.log(token);

  const listPath =  [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/course',
      element: <Course></Course>
    },
    {
      path: '/blog',
      element: <Blog></Blog>
    },{
      path: '/careers',
      element: <Careers></Careers>
    },{
      path: '/contact',
      element: <Contact></Contact>
    },
    {
      path: '/courseDetail/:productId',
      element: <CourseDetail></CourseDetail>
    },
    {
      path: '/teacherProfile',
      element: <TeacherProfile></TeacherProfile>
    },
  ]
  const LoginPath = [
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/faceId',
      element: <FaceIDLogin></FaceIDLogin>
    },
  ]
  return (
    <div className="App">
      <Routes>
        {
          listPath.map((item, index) => {
            const Layout = DefaultLayout
            return <Route key={index} path={item.path} element={<Layout>{item.element}</Layout>}></Route>
          })
        }
        {
          LoginPath.map((item, index) => {
            const Layout = DefaultLogin
            return <Route key={index} path={item.path} element={<Layout>{item.element}</Layout>}></Route>
          })
        }
       </Routes>
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;
