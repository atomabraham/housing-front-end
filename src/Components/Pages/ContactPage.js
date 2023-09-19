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

                    </div>
                </Row>
            </div>
        </>
    )
}

export default ContactUs