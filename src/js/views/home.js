import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { CharacterCard } from "../component/characterCard";
import "../../styles/home.css";

export const Home = () => (
	<div data-bs-theme="dark" className="text-center mt-5">
		<h1>Hello!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		<CharacterCard />
	</div>
);
