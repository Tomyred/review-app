import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadProducts } from "./store/actions";

const Ecommerce = () => {
    const dispatch = useDispatch();
    const store = useSelector(store => store.ecommerce.loadReducer);

    const [searchText, setSearchText] = useState("");

    const handleClick = () => {
        dispatch(loadProducts(searchText));
    };

    if (store.loading === true) {
        return <h2> Cargando... </h2>;
    }

    return (
        <div>
            <input type="text" onChange={e => setSearchText(e.target.value)} />
            <button onClick={handleClick}> Buscar </button>
            <Link to="add"> Agregar producto </Link>
            <br />
            {store.data.map((product, i) => {
                return (
                    <a
                        href={product.url}
                        target="_blank"
                        rel="noreferrer"
                        key={i}
                    >
                        <img src={product.img} alt={product.title} />
                        <h3> {product.title} </h3>
                        <span> Precio: {product.price} </span>
                    </a>
                );
            })}{" "}
        </div>
    );
};

export default Ecommerce;
