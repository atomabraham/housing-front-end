//importation des dépendances
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../../Styles/Banners/FirstBanner.css'
import '../../Styles/SingIn-SingUp/SingIn.css'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useAuth } from '../Authentification/AuthContext';


//importation des images
import logo from '../../Assets/Images/logo 1.png'
import logo2 from '../../Assets/Images/logo 3.png'

//Composant de la première navBar

export function NavClik(){
    if(document.getElementById('listLinks').style.display=="block"){
        document.getElementById('listLinks').style.display="none" 
    }
}

function FirstBanner(){

    const { setUser, csrfToken } = useAuth();
	const [error, setError] = React.useState(null);
    //axios.defaults.withCredentials=true;

    //methode 2 login
    // const[credentials,setCredentials]=useState({
    //     email: 'zeus@gmail.com',
	// 	password: '12345GHLJBf@',
    // })
    // axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    // const request= (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:8000/api/login',credentials)
    //         .then(res => console.log(res))
    //         .catch(error => console.log(error))
    // }

    // login user
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		const body = {
			email: email.value,
			password: password.value,
		};
		//await csrfToken();
		try {
            // axios.post('http://localhost:8000/api/login',body)
            // .then(res=>console.log(res))
            // .catch(error => console.log(error))

			const resp = await axios.post('http://localhost:8000/api/login', body);
			if (resp.data.status === 200) {
				setUser(resp.data.user);
                alert('SUCCESS')
				return <Navigate to="/" />;
			}

		} catch (error) {
			if (error.response.status === 401) {
				setError(error.response.data.message);
                alert("ERROR")
			}
		}
	};

    /*function resolution(){
        if (window.innerWidth <=768){
            alert("ok")
        }
    }*/
    
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
    //window.location="#SecondPage";
    
    /*window.addEventListener('resize',resolution){
        console.log(`The screen is ${screenWidth}`)
    }*/

    return(
    <nav className='firstBanner' id='FirstBanner'>
        <div className='blockLogo' id='blockLogo'>
            <Link to="/"><img src={logo} className='logoFirstBanner' id='logoFirstBanner' alt='housing'/></Link>
            <ul className='menu'>
                <li >
                    <span className='contentMenu'>
                        <svg className='buttonAccount' onClick={menu} id='buttonAccount' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295c.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023c.144-.32.336-.607.576-.847c.24-.24.528-.431.848-.575c.32-.144.672-.208 1.024-.208c.368 0 .704.064 1.024.208c.32.144.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848a2.84 2.84 0 0 1-.848.575a2.715 2.715 0 0 1-2.064 0a2.84 2.84 0 0 1-.848-.575a2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406a4.883 4.883 0 0 0-1.088-1.135a5.207 5.207 0 0 0-1.04-.608a2.82 2.82 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.624 3.624 0 0 0 .528-1.934a3.71 3.71 0 0 0-.288-1.47a3.799 3.799 0 0 0-.816-1.199a3.845 3.845 0 0 0-1.2-.8a3.72 3.72 0 0 0-1.472-.287a3.72 3.72 0 0 0-1.472.288a3.631 3.631 0 0 0-1.2.815a3.84 3.84 0 0 0-.8 1.199a3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784c.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"/></svg>
                        <ul className='listLinks' id='listLinks'>
                            <li className='linkMenu1' id='linkMenu1'>
                                <a className='linkMenu linkMenu1' href='#'>Mon Compte</a>
                            </li>
                            <li className='linkMenu2'>
                                <a className='linkMenu linkMenu2' href='#'>Postez ma maison</a>
                            </li>
                            <li className='linkMenu3'>
                                <a className='linkMenu linkMenu3' href='#'>Mes favoris</a>
                            </li>
                            <li className='linkMenu4'>
                                <a className='linkMenu linkMenu4' id='linkMenu4' onClick={() => { handleShow(); menu();}} href='#login'>Se connecter</a>
                            </li>
                        </ul>
                    </span>
                </li>
            </ul>
        </div>

        {/*modal connexion*/}
        <Modal show={show} onHide={handleClose} id="login">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <p className='connexionTitle' id='connexionTitle'>Connexion</p>
            <img src={logo2} className='logoSingIn' id='logoSingIn' alt='HOUSING'/>
            <div>{error}</div>
            <form method='POST' action='#' onSubmit={handleSubmit}>
                <div className="group group1">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"></path></g></svg>
                    <input name='email' placeholder="Addresse email" type="text" class="email inputForm"/>
                </div>
                <div className="group group2">
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/></g></svg>
                    <input name='password' placeholder="Mot de passe" type="password" class="password inputForm"/>
                </div>
                <div className='remenber' id='remenber'>
                    <label for="checkbox1" class="checkbox">
                        <input type="checkbox" className='checkbox1' id="checkbox1" />
                        <span class="checkmark"></span>
                        <span class="label">Se souvenir de moi</span>
                    </label>
                </div>
                <button type='submit' className='submitSignIn' id='submitSignIn'>Se connecter</button>
                <Link to='/SignUp' onClick={handleClose} className='createAccount' id='createAccount'>Je n'ai pas encore de compte ?</Link>
            </form>
        </Modal.Body>
        </Modal>
    </nav>
    )
}

export default FirstBanner