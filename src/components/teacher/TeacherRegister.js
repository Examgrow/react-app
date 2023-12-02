import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000/api/'
function TeacherRegister() {
    useEffect(()=>{
        document.title ='Teacher Register'
    });


    const [teacherData,setteacherData]=useState({
        'full_name':'',
        'email':'',
        'password':'',
        'qualification':'',
        'mobile_no':'',
        'skills':'',
        'status':'',
    });

    const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }

   // console.log(teacherData)

    const submitForm=()=>{
        const teacherFormData = new FormData();
        teacherFormData.append("full_name",teacherData.full_name)
        teacherFormData.append("email",teacherData.email)
        teacherFormData.append("password",teacherData.password)
        teacherFormData.append("qualification",teacherData.qualification)
        teacherFormData.append("mobile_no",teacherData.mobile_no)
        teacherFormData.append("skills",teacherData.skills)

        try{
            axios.post(baseUrl+'teacher/',teacherFormData).then((response)=>{
                console.log(response.data);
                setteacherData({
                    'full_name':'',
                    'email':'',
                    'password':'',
                    'qualification':'',
                    'mobile_no':'',
                    'skills':'',
                    'status':'success',
                });
            });

        }catch(error){
            console.log(error);
            setteacherData({'status':'error'});
        }
    };

    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if(teacherLoginStatus==='true'){
        window.location.href='/teacher-dashboard';
    }


    return (
      <div className="container mt-4">
        <div className="row">
            <div className="col-6 offset-3">

                {teacherData.status==='success' && <p className="text-success">Thank you for Register</p>}
                {!teacherData.status==='error' && <p className="text-danger">somethings went wrong</p>}

                <div className="card p-2 mb-4">
                    <h5 className="card-header">Teacher Register</h5>
                    <div className="card-boady">
                    {/* <form> */}
                    <div className="mb-3">
                            <label  className="form-label">Full Name</label>
                            <input value={teacherData.full_name} type="text" onChange={handleChange} name="full_name" className="form-control" id="full_name" />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input value={teacherData.email} type="email" onChange={handleChange} name="email" className="form-control" id="Email" />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input value={teacherData.password} type="password" onChange={handleChange} name="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Interest</label>
                            <textarea value={teacherData.skills} name="skills" onChange={handleChange} className="form-control"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="qualification" className="form-label">qualification</label>
                            <input type="text" value={teacherData.qualification} onChange={handleChange} name="qualification" className="form-control" id="qualification" />
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile_no" className="form-label">mobile_no</label>
                            <input type="text" value={teacherData.mobile_no} onChange={handleChange} name="mobile_no" className="form-control" id="mobile_no" />
                            
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <button onClick={submitForm} type="submit" className="btn btn-primary">Register</button>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
export default TeacherRegister;
  