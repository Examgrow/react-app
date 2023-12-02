import Sidebar from "./Sidebar";

function TeacherDashboard() {
    return (
      <div className="container m-4">
        <div className="row">
            <aside className="col-md-3">
                <Sidebar />
            </aside>
            <section className="col-md-9">
                 TeacherDashboard
            </section>
        </div>
      </div>
    );
  }
  
export default TeacherDashboard;
  