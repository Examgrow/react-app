import { Link } from "react-router-dom";
import { useEffect } from "react";



function Home() {
  useEffect(()=>{
    document.title = 'Home'
  });
  return (
    <div className="container mt-4 mb-2">
      <h3 className="pd-1 mb-4">Latest Courses <Link to="/all-course" className="float-end">See All</Link></h3>
      <div className="row">
        <div className="col-md-3">
         <div className="card">
         <Link to="/detail/2"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/detail/2">Course title</Link></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
      </div>

      <h3 className="pd-1 mb-4 mt-4">Popular Courses <Link to="/popular-teacher" className="float-end">See All</Link></h3>
      <div className="row">
        <div className="col-md-3">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
         </div>
        </div>
      </div>


      <h3 className="pd-1 mb-4 mt-4">Feature Teacher <a href="#" className="float-end">See All</a></h3>
      <div className="row">
        <div className="col-md-3">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Teacher Name</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Teacher Name</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Teacher Name</a></h5>
          </div>
         </div>
        </div>
        <div className="col-md-3">
         <div className="card">
          <a href=""><img src="logo512.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Teacher Name</a></h5>
          </div>
         </div>
        </div>
      </div>

      <h3 className="pd-1 mb-4 mt-4">Student Testimonial </h3>
      <div className="row">
      <div id="carouselExampleDark" className="carousel carousel-dark slide py-5">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
            </div>
          <div className="carousel-item" data-bs-interval="2000">
          <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
          
          </div>
          <div className="carousel-item">
          <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
              </figure>
            
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>  
      </div>



      
    </div>
  );
}

export default Home;
