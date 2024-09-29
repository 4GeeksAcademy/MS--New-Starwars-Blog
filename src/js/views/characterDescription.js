import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export const CharacterDescription = () => {
	const { store, actions } = useContext(Context);
    const {id} = useParams();
    const [character, setCharacter] = useState([]);
    console.log(id);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://swapi.dev/api/people/"+id);
            const data = await res.json();
            setCharacter(data);
        }
        fetchData();
    }, []);
	return (
		<div className="container">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="row">{character.name}</div>
            <div className="row">{character.height}</div>
            <div className="row">{character.hair_color}</div>
            <div className="row">{character.eye_color}</div>
            <div className="row">{character.gender}</div>
		</div>
	);
};