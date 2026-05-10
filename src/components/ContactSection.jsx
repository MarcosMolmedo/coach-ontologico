import { useState } from "react";
import "../styles/ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.ok) {
        alert("Mensaje enviado correctamente.");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error(error);
      alert("Error del servidor. Revisá si el backend está encendido.");
    }

    setLoading(false);
  };

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

        <form className="contact__form" onSubmit={handleSubmit}>
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
              value={formData.name}
              onChange={handleChange}
              required
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
              value={formData.email}
              onChange={handleChange}
              required
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
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="contact__button" type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;