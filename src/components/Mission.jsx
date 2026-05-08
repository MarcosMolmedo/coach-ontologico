// src/components/Mission.jsx
import "../styles/Mission.css";

const Mission = () => {
  return (
    <section className="mission">
      <div className="mission__container">
        <div className="mission__content">
          <span className="mission__eyebrow">Nuestra misión</span>

          <h2 className="mission__title">
            Acompañarte a descubrir tu potencial interior
          </h2>

          <p className="mission__text">
            Creamos un espacio de escucha, claridad y transformación para que
            puedas reconectar con tu esencia, tomar mejores decisiones y avanzar
            hacia la vida que deseás construir.
          </p>

          <p className="mission__text mission__text--secondary">
            A través del coaching ontológico, trabajamos sobre tus conversaciones,
            emociones y acciones para generar cambios reales y sostenibles.
          </p>
        </div>

        <div className="mission__visual">
          <div className="mission__card">
            <span className="mission__card-number">01</span>
            <h3 className="mission__card-title">Claridad</h3>
            <p className="mission__card-text">
              Identificá qué querés transformar y hacia dónde querés avanzar.
            </p>
          </div>

          <div className="mission__card mission__card--highlight">
            <span className="mission__card-number">02</span>
            <h3 className="mission__card-title">Acción</h3>
            <p className="mission__card-text">
              Diseñá nuevos pasos concretos desde una mirada más consciente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;