import axios, { AxiosInstance } from "axios";

class Http {
    instance : AxiosInstance
    constructor(){
        this.instance = axios.create({
            baseURL: 'http://localhost:44351/',
            timeout : 10000,
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin' : '*',
            }
        })
        // this.instance.interceptors.request.use(
        //     (config : any) => {
               
        //         config.headers.Authorization = `Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkFkbWluIiwiVXNlciJdLCJleHAiOjE2OTA1MTkzOTF9.QdLf1XkUGAopCRH37PYHhdALLaVhuXNK0Fv-mRAi5FBT3Nwpujp7Zsi27xhgvd4AcCKCWmfAWvQ3WIfyjVuk3w
        //         `;
        //         return config
              
        //     },
           
        //   )
    }
}
const http = new Http().instance
export default http;