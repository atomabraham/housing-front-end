import { Link } from "react-router-dom";
import "../../../Styles/Footer/Footer.css";

function Footer() {
  return (
    <>
      <div className="row blockFooter" id="blockFooter">
        <div className="contentFooterDiv" id="contentFooterDiv">
          <div className="col-md-3 blockLinkFooter">
            <h5>Liens</h5>
            <br />
            <Link to="/aboutUs" className="linkFooter">
              A propos de nous
            </Link>
            <br />
            <Link to="" className="linkFooter">
              Assistance
            </Link>
            <br />
            <Link to="/contactUs" className="linkFooter">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
