import { Link } from "react-router-dom";
import "../../../Styles/Footer/Footer.css";
import {
  Copyright,
  Facebook,
  LinkedIn,
  LocationCity,
  Mail,
  Phone,
  YouTube,
} from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="blockFooter" id="blockFooter">
        <div className="row contentFooterDiv" id="contentFooterDiv">
          <div className="col-md-3 blockColFooter blockAboutFooter">
            <h3 className="titleFooter">A propos de HOUSING</h3>
            <p className="textFooter">
              Nous sommes ravis de vous accueillir et de vous offrir un accès
              facile et pratique à une vaste sélection de propriétés
              immobilières.{" "}
            </p>
            <Link to="/aboutUs" className="savoirPlusFooter">
              En savoir plus
            </Link>
          </div>
          <div className="col-md-3 blockColFooter blockContactFooter">
            <h3 className="titleFooter">Nous contacter</h3>
            <p className="textFooter">
              <LocationCity />
              Douala,Cameroun BP:30
            </p>
            <p className="textFooter">
              <Phone />
              +237 674882527
            </p>
            <p className="textFooter">
              <Mail />
              tadzongmbipeabraham@fmail.com
            </p>
          </div>
          <div className="col-md-4 blockColFooter blockNewsletterFooter">
            <h3 className="titleFooter">S'nscrire à la newsletter</h3>
            <div className="divFormMewsLetter">
              <input
                type="email"
                className="inputEmailNewletter"
                id="inputEmailNewletter"
                placeholder="Votre addresse mail"
              />
              <button type="button" className="submitNewsletter">
                Soumettre
              </button>
            </div>
            <p className="textFooter">
              Vous serez informé lorsqu'un nouveau bien sera ajouté sur la
              platforme
            </p>
          </div>
        </div>
        <div className="lasBlockFooter">
          <div className="row contentLasBlockFooter">
            <div className="col-md-4 colLastblockFooter copyright">
              <Copyright />
              <p className="textCopyright">HOUSING - Tous droits réservés</p>
            </div>
            <div className="col-md-4 colLastblockFooter copyright">
              <Link to="" className="linkLasBlockFooter">
                Confidentialité
              </Link>
              <Link to="" className="linkLasBlockFooter">
                Termes et conditions
              </Link>
              <Link to="" className="linkLasBlockFooter">
                Contact
              </Link>
            </div>
            <div className="col-md-4 colLastblockFooter copyright LinkSocialFooter">
              <Link to="" className="linkLasBlockSocialMediaFooter">
                <Facebook />
              </Link>
              <Link to="" className="linkLasBlockSocialMediaFooter">
                <YouTube />
              </Link>
              <Link to="" className="linkLasBlockSocialMediaFooter">
                <LinkedIn />
              </Link>
              <Link to="" className="linkLasBlockSocialMediaFooter">
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
