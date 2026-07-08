import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BoardListPage from "./pages/BoardListPage";
import BoardCreatePage from "./pages/BoardCreatePage";
import BoardEditPage from "./pages/BoardEditPage";

export default function App() {
    const [boards, setBoards] = useState([{id: 1, title: "...", content: "...", author: "..."}]);
    function handleCreate() {
        console.log("게시글 생성");
    }
    
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<BoardListPage boards={boards} />} />
                <Route path="/boards/new" element={<BoardCreatePage />} />
                <Route path="/boards/:id/edit" element={<BoardEditPage />} />
            </Routes>
            <Footer />
        </div>
    )
}