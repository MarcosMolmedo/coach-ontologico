// src/components/AboutStory.jsx

import "../styles/AboutStory.css";

const AboutStory = ({ onHideStory }) => {
  return (
    <section className="about-story" id="mi-historia">
      <div className="about-story__container">
        <div className="about-story__header">
          <p className="about-story__eyebrow">Mi historia</p>

          <h2 className="about-story__title">
            Transformar mi vida empezó por aprender a escucharme
          </h2>
        </div>

        <div className="about-story__grid">
          <div className="about-story__content">
            <p className="about-story__text">
              Mi camino no empezó desde las respuestas, sino desde las preguntas.
              Durante mucho tiempo busqué afuera lo que necesitaba empezar a
              construir adentro: claridad, confianza y una forma más honesta de
              habitar mi propia vida.
            </p>

            <p className="about-story__text">
              En ese proceso descubrí que el verdadero cambio no aparece cuando
              intentamos convertirnos en otra persona, sino cuando nos animamos a
              mirar con más verdad quiénes somos, qué sentimos y qué decisiones
              estamos postergando.
            </p>

            <p className="about-story__text">
              Hoy acompaño a otras personas desde ese lugar: con presencia,
              sensibilidad y compromiso. No desde una fórmula cerrada, sino desde
              una conversación profunda que abre posibilidades nuevas.
            </p>
          </div>

          <div className="about-story__cards">
            <article className="about-story__card">
              <span className="about-story__card-number">01</span>
              <h3 className="about-story__card-title">Autenticidad</h3>
              <p className="about-story__card-text">
                Volver a conectar con lo que realmente sos, sin máscaras ni
                exigencias externas.
              </p>
            </article>

            <article className="about-story__card about-story__card--accent">
              <span className="about-story__card-number">02</span>
              <h3 className="about-story__card-title">Conciencia</h3>
              <p className="about-story__card-text">
                Observar tus patrones, tus elecciones y la forma en que te
                relacionás con tu historia.
              </p>
            </article>

            <article className="about-story__card">
              <span className="about-story__card-number">03</span>
              <h3 className="about-story__card-title">Transformación</h3>
              <p className="about-story__card-text">
                Empezar a tomar decisiones más alineadas con la vida que querés
                construir.
              </p>
            </article>
          </div>
        </div>

        <div className="about-story__quote">
          <p className="about-story__quote-text">
            “No acompaño desde la teoría. Acompaño desde lo vivido.”
          </p>
        </div>

        <div className="about-story__actions">
          <button
            type="button"
            className="about-story__button"
            onClick={onHideStory}
          >
            Ver menos
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;