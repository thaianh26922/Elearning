import { User, Users } from "../types/user.type";
import http from "../utils/http";

export const GetUsers = () => http.get<User>('takeUser')
export const addUSer = () => http.post<User>('addUser?name=nhanvat08&age=14')
export const updateUser = () => http.put<User>('updateUser?name=thai1')
export const deleteUser = (params : string) => http.delete<User>(`deleteUser?name=${params}`)

export const addImage = (imageFile : any) => {
    const formData = new FormData();
    formData.append('imageFile', imageFile);
  
    return http.post('addImage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  interface FormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  export const register = (formValues : FormValues) => {
    const requestData = {
      username: formValues.username,
      password: formValues.password,
    };
  
    return http.post('http://localhost:44351/api/Auth/register', requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  export const login = (username: string, password: string) => {
    const requestData = {
      username: username,
      password: password,
    };
  
    return http.post('http://localhost:44351/api/Auth/login', requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };