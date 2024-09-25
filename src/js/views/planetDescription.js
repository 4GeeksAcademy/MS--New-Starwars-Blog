export const PlanetDescription = () => {
	const { store, actions } = useContext(Context);
    const {id} = useParams();
    const [planet, setPlanet] = useState([]);
    console.log(id);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://swapi.dev/api/planets/"+id);
            const data = await res.json();
            setPlanet(data);
        }
        fetchData();
    }, []);
	return (
		<div className="container">
            <div className="row">{planet.name}</div>
            <div className="row">{planet.gravity}</div>
            <div className="row">{planet.climate}</div>
            <div className="row">{planet.terrain}</div>
            <div className="row">{planet.population}</div>
		</div>
	);
};