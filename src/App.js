import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
