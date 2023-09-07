import { useEffect, useState } from 'react';
import '../../../Styles/DashboardAdmin/MenuProperyAdmin.css'
import axios from 'axios';
import { BorderColor, DeleteSweep, Lock, LockOpen } from '@mui/icons-material';
import { Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function MenuProperyAdmin(){
    const location = useLocation()

    if(location === "/Dashboard/options"){
        let rowMenuOptionAdmin = document.getElementById('rowMenuOptionAdmin')
        let rowMenuStatistic = document.getElementById('rowMenuStatistic')
        let rowMenuProperties = document.getElementById('rowMenuProperties')
        let rowMenuOption = document.getElementById('rowMenuOption')
        let rowMenuUsers = document.getElementById('rowMenuUsers')
        let rowMenuTransaction = document.getElementById('rowMenuTransaction')
        // if (rowMenuOptionAdmin.style.display == "none") {
            rowMenuOptionAdmin.style.display = "block" 
            rowMenuProperties.style.display = "none" 
            rowMenuOption.style.backgroundColor = "#f6b100"
            rowMenuStatistic.style.backgroundColor = "transparent"
            rowMenuProperties.style.backgroundColor = "transparent"
            rowMenuUsers.style.backgroundColor = "transparent"
            rowMenuTransaction.style.backgroundColor = "transparent"
        // }
    }

    //recuperation des propriete

    const [Properties, setProperties] = useState([])

    const fetchProperties = async () => {
        await axios.get('http://localhost:8000/api/properties').then(({data}) => {
            setProperties(data);
        })
    }

    useEffect(() => {
        fetchProperties()
    }, [])

    return(
        <>
            <Row className='rowMenupropertyAdmin' id='rowMenupropertyAdmin'>
                <Row className='lineMenuproperty'>
                    {/* line */}
                </Row>
                <Row className='rowpropertyList'>
                    <table>
                        <tr className='menuEntete'>
                            <th className='thMenuEntete'>Id</th>
                            <th className='thMenuEntete'>Nom</th>
                            <th className='thMenuEntete'>Prix</th>
                            <th className='thMenuEntete'>City</th>
                            <th className='thMenuEntete'>Status</th>
                            <th className='thMenuEntete'>Quartier</th>
                            <th className='thMenuEntete'>Image</th>
                            <th className='thMenuEntete'></th>
                        </tr>
                        <Row className='espaceTableproperty'></Row>
                        {
                            Properties.map((property) => (
                                <>
                                    <tr className='trMenuProperty'>
                                        <td className='idPropertyMenuDashboard'>{property.id}</td>
                                        <td>{property.propertyName}</td>
                                        <td>{property.price} FCFA</td>
                                        <td>{property.propertyStatus}</td>
                                        <td>{property.city}</td>
                                        <td>{property.quartier}</td>
                                        <td><img width="40px" height="40px" src={`http://localhost:8000/storage/images/properties/${property.image}`} alt=''/></td>
                                        <td className='editDeleteOption'>
                                            <button type="button" className="buttonEditOption" id="buttonEditOption">
                                                <BorderColor className='editMenu'/>
                                            </button>
                                            <button type='button' /*onClick={() => deleteOption(option.id)}*/ className='buttonDeleteOption'>
                                                <DeleteSweep className='deleteMenu'/>
                                            </button>
                                        </td>
                                    </tr>
                                    <Row className='espaceTableproperty'></Row>
                                </>
                        ))
                        }
                    </table> 
                </Row>
            </Row>
        </>
    )
}

export default MenuProperyAdmin