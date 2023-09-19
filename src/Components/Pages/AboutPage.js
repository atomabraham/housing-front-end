import { Row } from 'react-bootstrap'
import '../../Styles/AboutPage.css'
import Navbar from "../ElementsPages/Banners/Navbar"
import { Link } from 'react-router-dom'
import image1 from '../../Assets/Images/HPTO_2120-NW-97th-St-Seattle_PremierHP.jpg'

function AboutUs(){
    return(
        <>
            <Navbar/>
            <div className='BlockAbout'>
                <Row className='firstBlockAbout'>
                    <div className='col-md-6 FirstBlockLeftAbout'>
                        <h1><b><span className='spanttitleAbout'>Bienvenue</span> chez HOUSING</b></h1>
                        <p>Nous sommes ravis de vous accueillir et de vous offrir un accès facile et pratique à une vaste sélection de propriétés immobilières.  Que vous cherchiez à louer, acheter ou vendre une maison ou un appartement, notre plateforme est là pour vous accompagner à chaque étape de votre parcours immobilier.</p>
                        <p>nous comprenons que l'achat, la vente ou la location d'une propriété est une décision importante. C'est pourquoi nous mettons tout en œuvre pour rendre votre expérience aussi fluide et agréable que possible</p>
                        <p>Nous avons rassemblé une équipe d'experts passionnés qui se consacrent à vous fournir les meilleures opportunités et un service de qualité. Explorez notre site et trouvez la propriété idéale qui correspond à vos besoins et à vos aspirations.</p>
                        <Link to="/" className="linkToHome">TROUVER UN BIEN MAINTENANT</Link>
                    </div>
                    <div className='col-md-6'>
                        <img src={image1} alt=''/>
                    </div>
                </Row>
            </div>
        </>
    )
}

export default AboutUs