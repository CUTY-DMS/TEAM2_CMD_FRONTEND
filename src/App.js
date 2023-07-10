import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Announcement from './Pages/Announcement';
import StudentInfo from './Pages/StudentInfo';
import AnnounceWrite from './Pages/AnnounceWrite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Announcement" element={<Announcement />} />
        <Route path="/StudentInfo" element={<StudentInfo />} />
        <Route path="/AnnounceWrite" element={<AnnounceWrite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
