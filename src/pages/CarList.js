import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const URL = `https://bootcamp-rent-car.herokuapp.com/admin/car`

const CarList = () => {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();

    async function getCars(){
        try{
            setLoading(true)
            const res = await window.fetch(URL);
            const data = await res.json();
            setCars(data)
            setLoading(false)
        }catch(e){
            setLoading(false)
            console.log(e)
        }
    }

    useEffect(() => {
        getCars()
    }, [])

    function handleViewDetail(id){
        navigate(`/cars/${id}`)
    }

    return(
        <>
            <h1>Car List</h1>
            <ul>
                {loading ? <div>loading...</div> : cars.map(car => (
                    <li key={car.id}>
                    {car.image ? (
                        <img src={car.image} alt={car.name}/>
                        ) : (
                        <div>no image</div>
                    )}
                        <div>{car.name}</div>
                        <div>{car.price}</div>
                        <button onClick={() => handleViewDetail(car.id)}>View Details</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CarList;