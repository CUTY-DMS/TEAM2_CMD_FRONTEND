import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Announcement from './Pages/Announcement';
import AnnounceWrite from './Pages/AnnounceWrite';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import MyProfile from './Pages/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Announcement" element={<Announcement />} />
        <Route path="/AnnounceWrite" element={<AnnounceWrite />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
