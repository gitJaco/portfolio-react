import useReveal from "./useReveal";

export default function Projects() {
  useReveal();

  return (
    <section id="projects" className="projects">
      <h2 className="reveal">Proyectos</h2>

      <div className="project-card reveal">
        <h3>Web Project API Full</h3>
        <p>Aplicación full-stack con API REST desplegada en Google Cloud.</p>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>API REST</li>
          <li>Google Cloud</li>
        </ul>
        <div className="links">
          <a href="https://github.com/gitJaco/web_project_api_full" target="_blank">
            GitHub
          </a>
          <a href="https://jacopeth.twilightparadox.com" target="_blank">
            Demo
          </a>
        </div>
      </div>

      <div className="project-card reveal">
        <h3>Final Project – Spotify API</h3>
        <p>Aplicación web consumiendo la API de Spotify.</p>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>Spotify API</li>
          <li>Vercel</li>
        </ul>
        <div className="links">
          <a href="https://github.com/gitJaco/FinalProject" target="_blank">
            GitHub
          </a>
          <a href="https://final-project-omega-lac.vercel.app/" target="_blank">
            Demo
          </a>
        </div>
      </div>
    </section>
  );
}