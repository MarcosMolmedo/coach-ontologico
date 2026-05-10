import "../styles/Testimonials.css";

const testimonials = [
  {
    quote:
      "El proceso me ayudó a ordenar mis pensamientos, recuperar claridad y tomar decisiones desde un lugar mucho más consciente.",
    name: "Laura M.",
    role: "Proceso individual",
  },
  {
    quote:
      "Sentí un acompañamiento cercano, respetuoso y muy profundo. Cada encuentro me dejó herramientas concretas para mi vida diaria.",
    name: "Martín R.",
    role: "Coaching personal",
  },
  {
    quote:
      "Pude mirar situaciones que venía repitiendo hace años y encontrar nuevas formas de responder. Fue un antes y un después.",
    name: "Carolina S.",
    role: "Desarrollo emocional",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <span className="testimonials__eyebrow">Testimonios</span>

          <h2 className="testimonials__title">
            Historias de personas que eligieron transformarse
          </h2>

          <p className="testimonials__text">
            Cada proceso es único. Estos testimonios reflejan experiencias reales
            de acompañamiento, claridad y crecimiento personal.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article className="testimonials__card" key={testimonial.name}>
              <p className="testimonials__quote">“{testimonial.quote}”</p>

              <div className="testimonials__person">
                <h3 className="testimonials__name">{testimonial.name}</h3>
                <p className="testimonials__role">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;