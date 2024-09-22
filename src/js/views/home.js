import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { CharacterCard } from "../component/characterCard";
import { VehiclesCard } from "../component/vehiclesCard";
import { PlanetsCard } from "../component/planetsCard";
import "../../styles/home.css";

export const Home = () => (
	<div data-bs-theme="dark" className="text-center mt-5">
	    <VehiclesCard />
		<CharacterCard />
		<PlanetsCard />
	</div>
);
