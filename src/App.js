import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Announcement from "./Pages/Announcement";
import AnnounceWrite from "./Pages/AnnounceWrite";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import StudentDetail from "./Pages/StudentDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Announcement" element={<Announcement />} />
        <Route path="/AnnounceWrite" element={<AnnounceWrite />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/StudentDetail" element={<StudentDetail />} />
        <Route path="/StudentList" element={<StudentDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
