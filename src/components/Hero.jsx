import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__content">
          <h1 className="hero__title">
              Transformá tu vida
               <br />
               desde adentro
           </h1>

          <p className="hero__subtitle">
            Coaching ontológico para personas que quieren avanzar, sanar y
            desbloquear su verdadero potencial.
          </p>

          <a href="#contacto" className="hero__button">
            Reservá sesión
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;