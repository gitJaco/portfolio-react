import useReveal from "./useReveal";

export default function About() {
  useReveal();

  return (
    <section className="reveal">
      <h2>Sobre mí</h2>
      <p>
        Inicié mi camino en tecnología formateando computadoras y resolviendo
        incidencias técnicas. Posteriormente concluí la carrera de
        <strong> Ingeniería en Computación Administrativa</strong>, obtuve la
        <strong> certificación CCNA</strong> y finalicé mi formación como
        <strong> Web Developer</strong>.
      </p>
    </section>
  );
}