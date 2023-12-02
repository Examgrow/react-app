import { Link } from "react-router-dom";

function TeacherDetail() {
    return (
        <div className="container mt-3 mb-3">
        <div className="row">
            <div className="col-4">
            <img src="/logo512.png" className="img-thumbnail" alt="Course img"/>
            </div>
            <div className="col-8">
                <h3>Ajit Rathore</h3>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
                </p>
                <p className="fw-bold">Skill : <Link to="/">Python</Link></p>
                <p className="fw-bold">Total Enrolled : 400 Students</p>
                <p className="fw-bold"> Rating : 4.5/5</p>
            </div>

        </div>

        <div className="card mt-4">
            <h5 className="card-header">
                Course Videos
            </h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Introduction
                  <span className="float-end">
                    <span className="me-5"> 1 Hour 30 min</span>
                    <button className="btn btn-sm btn-danger"><i className="bi-youtube"></i></button>
                  </span>
                </li>
                <li className="list-group-item">Introduction
                  <span className="float-end">
                    <span className="me-5"> 1 Hour 30 min</span>
                    <button className="btn btn-sm btn-danger"><i className="bi-youtube"></i></button>
                  </span>
                </li>
                <li className="list-group-item">Introduction
                  <span className="float-end">
                    <span className="me-5"> 1 Hour 30 min</span>
                    <button className="btn btn-sm btn-danger"><i className="bi-youtube"></i></button>
                  </span>
                </li>
                <li className="list-group-item">Introduction
                  <span className="float-end">
                    <span className="me-5"> 1 Hour 30 min</span>
                    <button className="btn btn-sm btn-danger"><i className="bi-youtube"></i></button>
                  </span>
                </li>
                <li className="list-group-item">Introduction
                  <span className="float-end">
                    <span className="me-5"> 1 Hour 30 min</span>
                    <button className="btn btn-sm btn-danger"><i className="bi-youtube"></i></button>
                  </span>
                </li>
                <li className="list-group-item">Introduction
                  <span className="float-end">
                    <span className="me-5"> 1 Hour 30 min</span>
                    <button className="btn btn-sm btn-danger"><i className="bi-youtube"></i></button>
                  </span>
                </li>
                
                
            </ul>

        </div>
 
            
      </div>
    );
  }
  
export default TeacherDetail;
  