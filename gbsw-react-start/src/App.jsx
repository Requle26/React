// import { Router } from 'express';
import './App.css'
import { useState } from 'react';
import Counter from './components/Counter';
import Header from "./components/Header";
import Footer from './components/Footer';
import MainLayout from './components/Mainlayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';

function App() {
  const [name, setName] = useState("김성일")
  
  return (
    <div>
      {/* <Header></Header> */}
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/test' element={<>test</>} />
            <Route path='/test2' element={<>test2</>} />
          </Route>
          <Route path="/" element={<Counter name={name}/>} />
          <Route path="/login" element={<>로그인화면</>} />
          <Route path='/todo' element={<TodoList />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer></Footer> */}
      {/* <Header></Header> */}
      {/* 안녕하세요 */}
      {/* <Counter></Counter> */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
