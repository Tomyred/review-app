import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Ecommerce from "./components/eCommerce/ecommerce";
import Form from "./components/eCommerce/form";
import Posts from "./components/posts/posts";
import generateStore from "./store";

const store = generateStore();

function App() {
    const [title, setTitle] = useState("Hola mundo");
    const [inputValue, setInputValue] = useState();

    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <div className="random">
                        <Link to="/posts"> Hacia posts </Link>
                        <Link to="/products"> Hacia Products </Link>
                        <Link to="/contact"> Hacia contact </Link>
                    </div>

                    <Routes>
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/products" element={<Ecommerce />} />
                        <Route path="/contact" element={<h2> Contact </h2>} />
                        <Route path="/products/add" element={<Form />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
