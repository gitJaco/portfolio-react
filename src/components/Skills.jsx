import useReveal from "./useReveal";

export default function Skills() {
  useReveal();

  return (
    <section className="reveal">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>APIs REST</span>
        <span>Git</span>
        <span>Jira</span>
        <span>Zendesk</span>
      </div>
    </section>
  );
}