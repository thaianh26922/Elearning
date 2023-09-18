import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { GetUsers, register } from '../../api/user.api';
import { useFormik } from 'formik';
import * as Yup from "yup";

export default function Register() {
  const queryClient = useQueryClient();
  

  // const { data, isLoading } = useQuery(['users'], () => GetUsers());
  // const { mutate: mutation, isLoading: isMutating } = useMutation({
    
  //   mutationFn: () => register(formik.initialValues.username, formik.initialValues.password),
  //   onSuccess: (data) => {
  //     console.log(data);
  //     queryClient.invalidateQueries();
  //   }
  // });
  
interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const { mutate: mutation, isLoading: isMutating } = useMutation(
  (formData: FormValues) => register(formData), {
  onSuccess: (data) => {
    console.log(data);
    queryClient.invalidateQueries();
  }
});

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Tên người dùng phải có ít nhất 3 ký tự")
        .required("Tên người dùng là trường bắt buộc"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email là trường bắt buộc"),
      password: Yup.string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .required("Mật khẩu là trường bắt buộc"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu xác nhận không khớp")
        .required("Xác nhận mật khẩu là trường bắt buộc"),
    }),
    onSubmit: (values: FormValues) => {
      // Gọi hàm mutation và truyền dữ liệu đăng ký
      mutation(values);
    },
  });

  return (
    <div className='login-page'>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className='login-page-input'>
            <label htmlFor="username">Tên người dùng</label>
          </div>
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
        </div>
        <div >
          <div className='login-page-input'>
            <label htmlFor="email">Email</label>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <div className='login-page-input'>
            <label htmlFor="password">Mật khẩu</label>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <div className='login-page-input'>
            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
          </div>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <div className='login-button'>
          <button type="submit">Register</button>
        </div>
      </form>
      {/* <div className='login-button'>
        <button onClick={HandleRegister}>Register</button>
      </div> */}
    </div>
  )
}
