import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Login from './Pages/Login';
import Announcement from './Pages/Announcement';
import StudentInfo from './Pages/StudentInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Announcement" element={<Announcement />} />
        <Route path="/StudentInfo" element={<StudentInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
