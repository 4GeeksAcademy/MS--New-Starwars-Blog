import React,{ useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";

export const VehiclesCard= () =>{
    const { store, actions } = useContext(Context);
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://swapi.dev/api/starships/");
            const data = await res.json();
            setStarships(data.results);
        }
        fetchData();
    },[]);
return (
    <div className="container d-flex col-10 overflow-auto mt-5 mx-auto">
        {starships?.map((starships, index) => (
            <div className="card" style={{minWidth:"200px"}} key={index}>
                {console.log(starships.name)}
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title text-dark">{starships.name}</h5>

              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        )) }


    </div>
);
}