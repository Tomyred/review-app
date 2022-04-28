import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Switchs = () => {
    const [switchs, setSwitchs] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        if (loaded === false) {
            async function getData() {
                setLoading(true);
                setTimeout(async () => {
                    const response = await axios.get(url);
                    setPosts(response.data);
                    setLoaded(true);
                    setLoading(false);
                }, 2000);
            }

            getData();
        }
    }, [loaded]);

    if (loading === true) {
        return <h3> Cargando... </h3>;
    }

    return (
        <div>
            <Link to="prueba"> prueba</Link>
            <Link to="/prueba"> prueba</Link>
            <button onClick={() => setSwitchs(!switchs)}> Click me! </button>
            <ul>
                {posts.map(post => {
                    return <li> {post.title} </li>;
                })}
            </ul>
        </div>
    );
};

export default Switchs;
