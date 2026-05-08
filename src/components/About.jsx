
import "../styles/About.css";

import coachimagen1 from "../assets/images/coachimagen1.png";
import coachimagen2 from "../assets/images/coachimagen2.png";
import coachimagen3 from "../assets/images/coachimagen3.png";

const About = ({ onShowStory }) => {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__container">
        <div className="about__visual">
          <div className="about__shape about__shape--one"></div>
          <div className="about__shape about__shape--two"></div>

          <div className="about__image-wrapper about__image-wrapper--main">
            <img
              src={coachimagen1}
              alt="Coach ontológico"
              className="about__image"
            />
          </div>

          <div className="about__image-wrapper about__image-wrapper--top">
            <img
              src={coachimagen2}
              alt="Momento personal"
              className="about__image"
            />
          </div>

          <div className="about__image-wrapper about__image-wrapper--bottom">
            <img
              src={coachimagen3}
              alt="Experiencia de vida"
              className="about__image"
            />
          </div>
        </div>

        <div className="about__content">
          <p className="about__eyebrow">Quién soy</p>

          <h2 className="about__title">
            Un proceso personal que transformó mi manera de vivir
          </h2>

          <p className="about__text">
            Durante muchos años viví funcionando en automático,
            intentando cumplir expectativas y sostener una vida
            que desde afuera parecía estar bien, pero que por dentro
            muchas veces se sentía vacía.
          </p>

          <p className="about__text">
            El coaching y el trabajo interior me ayudaron a entender
            que transformar una vida no empieza afuera, sino en la
            forma en que nos miramos, nos escuchamos y nos vinculamos
            con nosotros mismos.
          </p>

          <p className="about__text">
            Hoy acompaño procesos desde un lugar humano, cercano y real,
            creando espacios donde las personas puedan reconectar con
            su autenticidad y empezar a vivir con más conciencia.
          </p>

          <button
            type="button"
            className="about__button"
            onClick={onShowStory}
          >
            Ver más
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;