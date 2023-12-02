import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import CourseDetails from "./CourseDetails";
import TeacherDetail from "./TeacherDetail";


import Login from "./user/Login";
import Register from "./user/Register";
import Dashboard from "./user/Dashboard";
import MyCourse from "./user/MyCourse";
import FavoriteCourse from "./user/FavoriteCourse";
import RecommendedCourse from "./user/RecommendedCourse";
import ProfileSetting from "./user/ProfileSetting";
import ChangePassword from "./user/ChangePassword";


import TeacherLogin from "./teacher/TeacherLogin";
import TeacherLogout from "./teacher/TeacherLogout";
import TeacherRegister from "./teacher/TeacherRegister";
import TeacherDashboard from "./teacher/TeacherDashboard";
import AllCourse from "./AllCourse";
import PolularTeacher from "./PolularTeacher";


import {Routes,Route} from 'react-router-dom'

function Main() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:course_id" element={<CourseDetails />} />
          <Route path="/user-login" element={<Login />} />
          <Route path="/user-register" element={<Register />} />
          <Route path="/user-dashboard" element={<Dashboard />} />
          <Route path="/my-courses" element={<MyCourse />} />
          <Route path="/favorite-courses" element={<FavoriteCourse />} />
          <Route path="/recommended-courses" element={<RecommendedCourse />} />
          <Route path="/profile-setting" element={<ProfileSetting />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/teacher-register" element={<TeacherRegister />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher-logout" element={<TeacherLogout />} />

          <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />
          <Route path="/all-course" element={<AllCourse />} />
          <Route path="/popular-teacher" element={<PolularTeacher />} />
            
        </Routes>
        
        <Footer/>
      </div>
    );
  }
  
  export default Main;
  