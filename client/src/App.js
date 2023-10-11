import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Registration from './pages/registration/Registration';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import UserDashboard from './pages/userDashboard/UserDashboard';
import CourseList from './pages/courseList/CourseList';
import ExamList from './pages/examList/ExamList';
import Examination from './pages/Examination/Examination';
import ResultCertificate from './pages/resultCertificate/ResultCertificate';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/adminDashboard' element={<AdminDashboard />} />
          <Route path='/userDashboard' element={<UserDashboard />} />
          <Route path='/courses' element={<CourseList />} />
          <Route path='/exams/:courseid' element={<ExamList />} />
          <Route path='/exams/:courseid/:examid' element={<Examination />} />
          <Route path='/exams/:examid/results' element={<ResultCertificate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
