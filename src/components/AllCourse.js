import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000/api/'


function AllCourse() {
  const [courseData,setCourseData] =useState([]);

  useEffect(()=>{
    try{
       axios.get(baseUrl+'course/')
       .then((res)=>{
         setCourseData(res.data);
         console.log(res.data)
       });

    }
    catch(error){
      console.log(error);
    }


  },[]);



  return (
    <div className="container mt-4 mb-2">
      <h3 className="pd-1 mb-4">Latest Courses </h3>
      <div className="row">
        {courseData && courseData.map((course,index)=>

        <div className="col-md-3 mb-2">
         <div className="card">
         <Link to="/detail/2"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
          </div>
         </div>
        </div>

       )};
      </div>


    
    </div>
  );
}

export default AllCourse;
