import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => (
  <div>
    <a href="https://wa.me/seunumero"
      target="_blank"
      rel="noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
    <a
      href="https://linkedin.com/in/seuperfil"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
  </div>
);
export default SocialIcons;
