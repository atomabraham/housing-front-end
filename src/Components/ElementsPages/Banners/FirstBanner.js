//importation des dépendances
import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../../../Styles/Banners/FirstBanner.css'
import '../../../Styles/SingIn-SingUp/SingIn.css'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SingIn from '../../SingIn-SingUp/SingIn/SingIn';
import axios from '../../Authentification/axios';

//importation des images
import logo from '../../../Assets/Images/logo 1.png'
import logo2 from '../../../Assets/Images/logo 3.png'

//Composant de la première navBar

export function CloseMenu(){
    if(document.getElementById('listLinks').style.display=="block"){
        document.getElementById('listLinks').style.display="none" 
    }
}

function FirstBanner(){
            


    //le modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //
    let buttonAccount=document.getElementById('buttonAccount')
    let linkMenu=document.getElementById('listLinks')
    let linkMenu4=document.getElementById('linkMenu4')
    function menu(){
        if(document.getElementById('listLinks').style.display=="none"){
            document.getElementById('listLinks').style.display="block"
        }else{
            document.getElementById('listLinks').style.display="none"
        }
    }

    // Verifier si un utilisateur est connecter ou non au serveur
	useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('http://localhost:8000/api/user');
				if (resp.status === 200 && resp.data.data.role==="User") {
                    let myAccount=document.getElementById('linkMenuAccount')
                    let myFavoris=document.getElementById('linkMenuFavoris')
                    let myProperty=document.getElementById('linkMenuMyProperty')
                    let login=document.getElementById('linkMenuSignIn')
                    let logout=document.getElementById('linkMenuLogout')
                    myAccount.style.display='block'
                    myFavoris.style.display='block'
                    myProperty.style.display='block'
                    logout.style.display='block'
                    login.style.display='none'
				}else if(resp.status === 200 && resp.data.data.role==="Admin"){
                    let myAccount=document.getElementById('linkMenuAccount')
                    let myFavoris=document.getElementById('linkMenuFavoris')
                    let myProperty=document.getElementById('linkMenuMyProperty')
                    let login=document.getElementById('linkMenuSignIn')
                    let logout=document.getElementById('linkMenuLogout')
                    let admin=document.getElementById('linkMenuAdmin')
                    admin.style.display='block'
                    myAccount.style.display='block'
                    myFavoris.style.display='block'
                    myProperty.style.display='block'
                    logout.style.display='block'
                    login.style.display='none' 
                }
			} catch (error) {
				if (error.response.status === 401) {
					let myAccount=document.getElementById('linkMenuAccount')
                    let myFavoris=document.getElementById('linkMenuFavoris')
                    let myProperty=document.getElementById('linkMenuMyProperty')
                    let login=document.getElementById('linkMenuSignIn')
                    let logout=document.getElementById('linkMenuLogout')
                    let admin=document.getElementById('linkMenuAdmin')
                    login.style.display="block"
                    logout.style.display="none"
                    myAccount.style.display="none"
                    myFavoris.style.display="none"
                    myProperty.style.display="none"
                    admin.style.display='none'
				}
			}
		})();
	}, );

    //déconnexion d'un utilisqteur
    const handleLogout = async () => {
		try {
			const resp = await axios.post('http://localhost:8000/api/logout');
			if (resp.status === 200) {
				localStorage.removeItem('user');
                // <Navigate to="/" />
                window.location.href = '/';
			}
		} catch (error) {
			// console.log(error);
            window.location.href = '/';
		}
	};

    return(
    <nav className='firstBanner' id='FirstBanner'>
        <div className='blockLogo' id='blockLogo'>
            <Link to="/"><img src={logo} className='logoFirstBanner' id='logoFirstBanner' alt='housing'/></Link>
            <Link to="/CreatePost" className='postProperty' id='postProperty'>
                <svg className='iconAddPost' id='iconAddPost' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                <span className='textPost' id='textPostp'> Ajouter une proprieté</span>
            </Link>
            <ul className='menu'>
                <li >
                    <span className='contentMenu'>
                        <svg className='buttonAccount' onClick={menu} id='buttonAccount' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295c.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023c.144-.32.336-.607.576-.847c.24-.24.528-.431.848-.575c.32-.144.672-.208 1.024-.208c.368 0 .704.064 1.024.208c.32.144.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848a2.84 2.84 0 0 1-.848.575a2.715 2.715 0 0 1-2.064 0a2.84 2.84 0 0 1-.848-.575a2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406a4.883 4.883 0 0 0-1.088-1.135a5.207 5.207 0 0 0-1.04-.608a2.82 2.82 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.624 3.624 0 0 0 .528-1.934a3.71 3.71 0 0 0-.288-1.47a3.799 3.799 0 0 0-.816-1.199a3.845 3.845 0 0 0-1.2-.8a3.72 3.72 0 0 0-1.472-.287a3.72 3.72 0 0 0-1.472.288a3.631 3.631 0 0 0-1.2.815a3.84 3.84 0 0 0-.8 1.199a3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784c.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"/></svg>
                        <ul className='listLinks' id='listLinks'>
                            <li className='linkMenu0'>
                                <a onClick={CloseMenu} className='linkMenu linkMenuBuy' id='linkMenuBuy' href='#'>Acheter</a>
                            </li>
                            <li className='linkMenu01'>
                                <a onClick={CloseMenu} className='linkMenu linkMenuLocation' id='linkMenuLocation' href='#'>Louer</a>
                            </li>
                            <li className='linkMenu2'>
                                <a onClick={CloseMenu} className='linkMenu linkMenuFavoris' id='linkMenuFavoris' href='#'>Mes favoris</a>
                            </li>
                            <li className='linkMenu3 '>
                                <a onClick={CloseMenu} className='linkMenu linkMenuMyProperty' id='linkMenuMyProperty' href='#'>Mes biens</a>
                            </li>
                            <li className='linkMenu33'>
                                <Link onClick={CloseMenu} to="/Dashboard" className='linkMenu linkMenuAdmin' id='linkMenuAdmin'>ADMINISTRATEUR</Link>
                            </li>
                            <li className='linkMenu1'>
                                <a onClick={CloseMenu} className='linkMenu linkMenuAccount' id='linkMenuAccount' href='#'>Mon Compte</a>
                            </li>
                            <li className='linkMenu4'>
                                <a onClick={CloseMenu} className='linkMenu linkMenuContactUs' id='linkMenuContactUs' href='#'>Nous contacter</a>
                            </li>
                            <li className='linkMenu5'>
                                <a className='linkMenu linkMenuSignIn' id='linkMenuSignIn' onClick={() => { handleShow(); menu();}} href='#login'>Se connecter</a>
                            </li>
                            <li className='linkMenu6'>
                                <a onClick={handleLogout} className='linkMenu linkMenuLogout' id='linkMenuLogout' href='#'>Se déconnecter</a>
                            </li>
                        </ul>
                    </span>
                </li>
            </ul>
        </div>

        {/*modal connexion*/}
        <Modal show={show} onHide={handleClose} id="login">
            <SingIn/>
        </Modal>
    </nav>
    )
}

export default FirstBanner