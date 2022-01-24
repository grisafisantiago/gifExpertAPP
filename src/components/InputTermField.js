import React, { useState } from "react";
import PropTypes from 'prop-types';

export let InputSearchField = ({ setCategory }) => {

    const [InputValue, setInputValue] = useState("");

    let setChangeInputValue = (event) => {
        setInputValue(event.target.value);
    };

    let capitalizarTermino = () => {
        let palabra = InputValue;
        return palabra.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
    };

    let setEnterInputValue = (event) => {
        event.preventDefault(); //Prevenir el refresh del navegador
        if (InputValue.trim().length > 2) {
            setInputValue('');
            setCategory(category => ([...category].includes(capitalizarTermino())) ?
                [...category] : [capitalizarTermino(), ...category]);
        }

    };

    return (
        <form onSubmit={setEnterInputValue} autoComplete="off">
            <h5 className="text-center mt-5 animate_animated animate__bounceInDown">Buscador de Imagenes</h5>
            <input type="text"
                placeholder="Buscar Imagen"
                className="form-control pt-3" id="searchField"
                name="searchField" minLength={3} value={InputValue} onChange={setChangeInputValue}></input>
        </form>
    );
};

InputSearchField.propTypes = {
    setCategory: PropTypes.func.isRequired
}