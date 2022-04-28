import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Posts from "./components/posts/posts";

function App() {
    const [title, setTitle] = useState("Hola mundo");
    const [inputValue, setInputValue] = useState();

    return (
        <div className="App">
            <BrowserRouter>
                <div className="random">
                    <Link to="/posts"> Hacia posts </Link>
                    <Link to="/home"> Hacia home </Link>
                    <Link to="/contact"> Hacia contact </Link>
                </div>

                <Routes>
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/home" element={<h2> Home </h2>} />
                    <Route path="/contact" element={<h2> Contact </h2>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
