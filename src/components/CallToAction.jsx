import "../styles/CallToAction.css";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="call-to-action__container">
        <p className="call-to-action__eyebrow">Comenzá hoy</p>

        <h2 className="call-to-action__title">
          Un primer paso puede abrir una nueva forma de vivirte
        </h2>

        <p className="call-to-action__text">
          Si sentís que es momento de mirar hacia adentro, ordenar lo que te
          pasa y empezar a tomar decisiones más conscientes, este puede ser el
          inicio de tu proceso.
        </p>

        <a href="#contacto" className="call-to-action__button">
          Reservar una sesión
        </a>
      </div>
    </section>
  );
};

export default CallToAction;