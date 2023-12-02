import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api/'
function PolularTeacher() {
    const [teacher, SetTeacher]=useState(null);
    useEffect(()=>{
        axios.get(baseUrl+'teacher/').then((response)=>{
            console.log(response.data);
        });
    },[]);



  return (
    <div className="container mt-4 mb-2">
      <h3 className="pd-1 mb-4">Polular Teacher </h3>
      <div className="row">
        <div className="col-md-3 mb-2">
         <div className="card">
         <Link to="/detail/2"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/detail/2">Course title</Link></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-2">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-2">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-2">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-2">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-2">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-2">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-2">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-2">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-2">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-2">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3 mb-2">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
      </div>


    
    </div>
  );
}

export default PolularTeacher;
