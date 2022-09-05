import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const URL = `https://bootcamp-rent-car.herokuapp.com/admin/car`

export default function CarDetail(){
    const [car, setCar] = useState('');
    //const params = useParams();
    const { id } = useParams();
    async function getCar(){
        try{
            const res = await window.fetch(`${URL}/${id}`);
            const data = await res.json();
            setCar(data)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        getCar()
    }, [])

    return(
        <>
            <h1>{car.name}</h1>
            <img src={car.image} alt={car.name} />
            <Link to="/cars">Back to List Car</Link>
        </>
    )
}