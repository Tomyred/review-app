import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "./store/actions";

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, serForm] = useState({});

    const setFormValues = e => {
        serForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        dispatch(addProduct(form));
        navigate(-1);
    };

    return (
        <div>
            <h2> Agregar producto </h2>
            <input type="text" onChange={e => setFormValues(e)} name="title" />
            <br />
            <input type="text" onChange={setFormValues} name="price" />
            <br />
            <input type="text" onChange={setFormValues} name="url" />
            <br />
            <input type="text" onChange={setFormValues} name="img" />
            <br />
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    );
};

export default Form;
