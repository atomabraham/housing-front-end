import { useParams } from 'react-router-dom'
import '../../Styles/ShowProperty.css'
import { useEffect, useState } from 'react';
import axios from '../Authentification/axios';

function ShowProperty () {

    const {id} = useParams()

    const [property, setProperty] = useState([])
    const fetchProperty = async () => {
        await axios.get(`http://localhost:8000/api/property/${id}`).then(({ data }) => {
        setProperty(data);
        });
    };

    useEffect(() => {
        fetchProperty();
    }, []);

    return(


        <>
            {
               property.map(prop => (
                <p>{prop.id}</p>
               ))
            }
        </>
    )
}

export default ShowProperty