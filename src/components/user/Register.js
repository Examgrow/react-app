function Register() {
    return (
      <div className="container mt-4">
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card p-2 mb-4">
                    <h5 className="card-header">User Register</h5>
                    <div className="card-boady">
                    <form>
                    <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Full Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Interest</label>
                            <textarea className="form-control"></textarea>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
export default Register;
  