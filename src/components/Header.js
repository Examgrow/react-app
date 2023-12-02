import { Link } from "react-router-dom";


function Header() {
    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
              <Link className="navbar-brand" to="/">LMS React App</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#">Course</a>
                  </li>
                  
                  <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Teacher
                  </a>
                  <ul className="dropdown-menu">
                    {teacherLoginStatus!='true' && 
                      <>
                      <li><Link to="/teacher-login" className="dropdown-item">Login</Link></li>
                      <li><Link to="/teacher-register" className="dropdown-item">Register</Link></li>
                      </>
                    }
                      <li><Link to="/teacher-dashboard" className="dropdown-item">Dashboard</Link></li>
                      <li><Link to="/teacher-logout" className="dropdown-item">Logout</Link></li>
                     
                  </ul>
                  </li>
                  <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                  </li>
                  <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      User
                  </a>
                  <ul className="dropdown-menu">
                      <li><Link to="/user-login" className="dropdown-item">Login</Link></li>
                      <li><Link to="/user-register" className="dropdown-item">Register</Link></li>
                      <li><Link to="/user-dashboard" className="dropdown-item">Dashboard</Link></li>
                      <li><Link to="/user-dashboard" className="dropdown-item">Logout</Link></li>
                     
                  </ul>
                  </li>
                 
              </ul>
              <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              </div>
          </div>
          </nav>
    );
  }
  
  export default Header;
  