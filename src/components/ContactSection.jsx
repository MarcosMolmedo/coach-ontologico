import "../styles/ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact" id="contacto">
      <div className="contact__container">
        <div className="contact__content">
          <span className="contact__eyebrow">Contacto</span>

          <h2 className="contact__title">
            Empezá tu proceso con una primera conversación
          </h2>

          <p className="contact__text">
            Si sentís que es momento de ordenar lo que te pasa, mirar hacia
            adentro y tomar decisiones más conscientes, escribime. Podemos
            conversar y ver juntos cuál es el mejor punto de partida.
          </p>

          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-label">Modalidad</span>
              <p className="contact__info-text">Sesiones online y presenciales</p>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-label">Respuesta</span>
              <p className="contact__info-text">Te responderé a la brevedad</p>
            </div>
          </div>
        </div>

        <form className="contact__form">
          <div className="contact__field">
            <label className="contact__label" htmlFor="name">
              Nombre
            </label>
            <input
              className="contact__input"
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
            />
          </div>

          <div className="contact__field">
            <label className="contact__label" htmlFor="email">
              Email
            </label>
            <input
              className="contact__input"
              id="email"
              name="email"
              type="email"
              placeholder="tuemail@ejemplo.com"
            />
          </div>

          <div className="contact__field">
            <label className="contact__label" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="contact__textarea"
              id="message"
              name="message"
              placeholder="Contame brevemente qué te gustaría trabajar..."
            ></textarea>
          </div>

          <button className="contact__button" type="submit">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;