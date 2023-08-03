import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnnounceWrite } from "../Pages/AnnounceWrite";
import { StudentDetail } from "../Pages/StudentDetail";
import { Announcement } from "../Pages/Announcement";
import { StudentList } from "../Pages/StudentList";
import { SignUp } from "../Pages/SignUp";
import { Login } from "../Pages/Login";
import { Main } from "../Pages/Main";
import { Layout } from "./Layout";
import { useCookies } from "react-cookie";

export const Router = () => {
  const [cookies,] = useCookies();
  return <BrowserRouter>
    <Routes>
      <Route element={<Layout Layout={cookies.accessToken? true : false} />}>
        <Route path="/" element={cookies.accessToken? <Main /> : <Login/>} />
        <Route path="/Announcement" element={cookies.accessToken? <Announcement /> : <Login />} />
        <Route path="/AnnounceWrite" element={cookies.accessToken? <AnnounceWrite /> : <Login />} />
        <Route path="/StudentDetail" element={cookies.accessToken? <StudentDetail /> : <Login />} />
        <Route path="/StudentList" element={cookies.accessToken? <StudentList /> : <Login />} />
      </Route>
      <Route path="/Login" element={!cookies.accessToken? <Login /> : undefined} />
      <Route path="/SignUp" element={!cookies.accessToken? <SignUp /> : undefined} />
    </Routes>
  </BrowserRouter>
}