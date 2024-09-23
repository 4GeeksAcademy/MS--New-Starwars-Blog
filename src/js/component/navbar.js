import React from "react";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [favorites, setFavorites] = useState([]);
	// setFavorites(store.favorites);
	useEffect(() => {
		setFavorites(store.favorites);
	}, [store.favorites]);
		return (
			<div className="container d-flex col-10 overflow-auto mt-5 mx-auto">
			  {planets?.map((planet, index) => (
				<div className="card" style={{ minWidth: "200px" }} key={index}>
				  <img src="..." className="card-img-top" alt="..." />
				  <div className="card-body">
					<h5 className="card-title text-dark">{planet.name}</h5>
					<button className="btn btn-primary" onClick={() => handleFavorites(planet.name)}>
					  <i className="far fa-heart"></i>
					</button>
					<Link to={"planetDescription/" + (index + 1)} className="btn btn-primary">Learn More</Link>
				  </div>
				</div>
			  ))}
			</div>
		  );
		};