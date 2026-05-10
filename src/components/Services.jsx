import "../styles/Services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Coaching individual",
      text: "Un espacio personalizado para ordenar tus pensamientos, reconocer tus bloqueos y avanzar con mayor claridad.",
    },
    {
      number: "02",
      title: "Gestión emocional",
      text: "Herramientas para comprender lo que sentís, regular tus emociones y responder con más conciencia.",
    },
    {
      number: "03",
      title: "Propósito y decisiones",
      text: "Acompañamiento para conectar con lo que querés construir y tomar decisiones alineadas con tu vida.",
    },
  ];

  return (
    <section className="services" id="servicios">
      <div className="services__container">
        <div className="services__intro">
          <span className="services__eyebrow">Servicios</span>

          <h2 className="services__title">
            Espacios de coaching para acompañarte en tu proceso
          </h2>

          <p className="services__description">
            Cada encuentro está pensado para ayudarte a mirar con más claridad,
            descubrir nuevas posibilidades y transformar la manera en que te
            relacionás con vos, con otros y con tus decisiones.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="services__card" key={service.number}>
              <span className="services__number">{service.number}</span>

              <h3 className="services__card-title">{service.title}</h3>

              <p className="services__card-text">{service.text}</p>

              <a className="services__link" href="#contacto">
                Consultar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;