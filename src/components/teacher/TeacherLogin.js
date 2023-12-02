import { useEffect, useState } from "react";
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api/'

function TeacherLogin() {
    useEffect(()=>{
        document.title ='Teacher Login'
    });

    const [teacherLoginData,setteacherLoginData]=useState({
        'email':'',
        'password':'',
       
    });

    const handleChange=(event)=>{
        setteacherLoginData({
            ...teacherLoginData,
            [event.target.name]:event.target.value
        });
    }

    const submitForm=()=>{
       // console.log(teacherLoginData);
        const teacherFormData = new FormData;
        teacherFormData.append('email',teacherLoginData.email)
        teacherFormData.append('password',teacherLoginData.password)

        try{
            axios.post(baseUrl+'teacher-login',teacherFormData).then((res)=>{
                console.log(res.data)
                if(res.data.bool==true){
                    localStorage.setItem('teacherLoginStatus',true)
                    window.location.href='/teacher-dashboard';
                }
            });

        }catch(error){
            console.log(error);
        }

        
    }

    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if(teacherLoginStatus==='true'){
        window.location.href='/teacher-dashboard';
    }


    return (
      <div className="container mt-4">
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card p-2 mb-4">
                    <h5 className="card-header">Teacher Login</h5>
                    <div className="card-boady">
                    {/* <form> */}
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input type="email" name="email" value={teacherLoginData.email} onChange={handleChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" value={teacherLoginData.password} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
export default TeacherLogin;
  