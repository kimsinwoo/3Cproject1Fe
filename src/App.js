import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recruitments from './Pages/Recruitments'
import { useState } from 'react';
import Login from './Pages/Login'
import MyPage from './Pages/Mypage'
import Signup from './Pages/Signup'
import Header from './Components/Header'
import MainPage from './Pages/MainPage'
import RecruitmentsPost from './Components/Post';

function App() {
  const [isLogin, setIsLogin] = useState() 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Header/>
            <MainPage/>
          </div>} 
        />
        <Route path="/login" element={<Login/>} />
        <Route path="/recruitments" element={
          <div>
            <Header />
            <Recruitments />
          </div>}
        />
        <Route path="/mypage" element={
          <div>
            <Header/>
            <MyPage />
          </div>}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
