import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__eyebrow">Coaching Ontológico</span>
          <h2 className="footer__title">Nombre del Coach</h2>
          <p className="footer__text">
            Un espacio para acompañarte a mirar hacia adentro, ordenar tus
            emociones y construir una forma de vivir más consciente.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Navegación del sitio">
          <a className="footer__link" href="#inicio">Inicio</a>
          <a className="footer__link" href="#mision">Misión</a>
          <a className="footer__link" href="#servicios">Servicios</a>
          <a className="footer__link" href="#testimonios">Testimonios</a>
          <a className="footer__link" href="#contacto">Contacto</a>
        </nav>

        <div className="footer__contact">
          <p className="footer__contact-title">Contacto</p>
          <a className="footer__contact-link" href="mailto:hola@coach.com">
            hola@coach.com
          </a>
          <a className="footer__contact-link" href="tel:+31000000000">
            +31 00 000 0000
          </a>
        </div>
      </div>

      <div className="footer__bottom">
  <p className="footer__copy">
    © 2026 Nombre del Coach. Todos los derechos reservados.
  </p>

  <div className="footer__credit">
    <span className="footer__credit-text">Diseño y desarrollo web por</span>

    <a
      className="footer__credit-link"
      href="https://www.linkedin.com/in/marcos-manuel-olmedo/?locale=es"
      target="_blank"
      rel="noreferrer"
    >
      Marcos M Olmedo
      <FaLinkedin className="footer__credit-icon" />
    </a>
  </div>

  <div className="footer__socials">
    <span className="footer__socials-text">Seguime en</span>

    <a className="footer__social-link" href="#" aria-label="WhatsApp">
      <FaWhatsapp />
    </a>

    <a className="footer__social-link" href="#" aria-label="Instagram">
      <FaInstagram />
    </a>
  </div>

      </div>
    </footer>
  );
};

export default Footer;