import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnnounceWrite } from "../Pages/AnnounceWrite";
import { StudentDetail } from "../Pages/StudentDetail";
import { Announcement } from "../Pages/Announcement";
import { StudentList } from "../Pages/StudentList";
import { SignUp } from "../Pages/SignUp";
import { Login } from "../Pages/Login";
import { Main } from "../Pages/Main";
import { Layout } from "./Layout";

export const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/Announcement" element={<Announcement />} />
        <Route path="/AnnounceWrite" element={<AnnounceWrite />} />
        <Route path="/StudentDetail" element={<StudentDetail />} />
        <Route path="/StudentList" element={<StudentList />} />
      </Route>
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
}