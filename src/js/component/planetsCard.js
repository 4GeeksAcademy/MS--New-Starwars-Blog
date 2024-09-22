import React,{ useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";


export const PlanetsCard= () =>{
    const { store, actions } = useContext(Context);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://swapi.dev/api/planets/");
            const data = await res.json();
            setPlanets(data.results);
        }
        fetchData();
    },[]);
return (
    <div className="container d-flex col-10 overflow-auto mt-5 mx-auto">
        {planets?.map((planets, index) => (
            <div className="card" style={{minWidth:"200px"}} key={index}>
                {console.log(planets.name)}
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title text-dark">{planets.name}</h5>

              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        )) }


    </div>
);
}