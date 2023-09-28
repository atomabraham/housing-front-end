import { Row } from 'react-bootstrap'
import '../../Styles/ContactPage.css'
import Navbar from "../ElementsPages/Banners/Navbar"


function ContactUs() {
    return(

        <>
            <Navbar/>
            <div className='blockContactPage'>
                <Row className='firstBlockContact'>
                    <div className="col-md-6 firstBlockLeftContact">
                        <h1 className='mb-5'><b><span className='spantitleContact'>Nous</span> contacter</b></h1>
                        <p>Vos informations ne seront pas publiée.</p>
                        <Row>
                            <div className='col-md-6'>
                                <input type='text' className='mb-3 inputContactPage' id='inputContactPageName' placeholder='Votre nom'/>
                            </div>
                            <div className='col-md-6'>
                                <input type='email' className='mb-3 inputContactPage' id='inputContactPageEmail' placeholder='Votre adresse email'/>
                            </div>
                        </Row>
                        <Row>
                            <div className='col-md-6'>
                                <input type='text' className='mb-3 inputContactPage' id='inputContactPageObjet' placeholder='Objet'/>
                            </div>
                            <div className='col-md-6'>
                                <input type='email' className='mb-3 inputContactPage' id='inputContactPagePhone' placeholder='Votre numero de téléphone'/>
                            </div>
                        </Row>
                        <Row>
                            <textarea className='mb-3 inputContactPage' id='inputContactPageMessage' placeholder='Entrer votre message'></textarea>
                        </Row>
                        <Row className='rowSubmitMessage'>
                            <button type="submit" className='buttonSendMessageContactPage'>Envoyer</button>
                        </Row>
                    </div>
                    <div className="col-md-6 firstBlockRightContact">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15919.181609071664!2d9.6898324!3d4.0620860500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1695201777704!5m2!1sfr!2scm" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Row>
            </div>
        </>
    )
}

export default ContactUs