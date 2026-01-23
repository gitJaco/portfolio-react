import profile from "../../public/profile.jpg"

export default function Hero() {
  return (
    <header className="hero hero-image">
      <div className="hero-overlay">
        <img src={profile} alt="Jacobo De Hoyos" className="avatar"></img>
        <h1 className="fade-in">Jacobo De Hoyos Reyes</h1>
        <p className="fade-in delay">
          Web Developer | Software Engineer | Software Develooper
        </p>
        <a href="#projects" className="btn fade-in delay-2">
          Ver proyectos
        </a>
      </div>
    </header>
  );
}