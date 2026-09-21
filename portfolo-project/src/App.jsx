import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      {/* ACTIVITY 1: INTRODUCE YOURSELF */}
      <section id="home" className="hero-section">
        <img
          src={heroImg}
          className="profile-photo"
          alt="Meryanne Junn B. Cloma"
        />

        <div className="hero-content">
          <p className="greeting">Hello! I am</p>

          <h1>Meryanne Junn B. Cloma</h1>

          <p className="introduction">
            I am an Information Systems student who enjoys learning about
            technology, web development, and system design.
          </p>

          <p className="tagline">
            My goal is to create useful systems that make work easier and
            more organized.
          </p>

          <a href="#about" className="learn-more-button">
            Learn More About Me
          </a>
        </div>
      </section>

      {/* ACTIVITY 2: TELL YOUR STORY */}
      <section id="about" className="about-section">
        <h2>About Me</h2>

        <p>
          I am an Information Systems student who is interested in technology
          and understanding how digital systems can help people and
          organizations.
        </p>

        <div className="about-content">
          <article className="about-item">
            <h3>My Background</h3>

            <p>
              My academic experiences have helped me improve my skills in
              system analysis, documentation, web design, and project
              development.
            </p>
          </article>

          <article className="about-item">
            <h3>Hobbies and Interests</h3>

            <ul>
              <li>Designing websites and prototypes</li>
              <li>Learning about new technologies</li>
              <li>Creating digital presentations</li>
              <li>Listening to music</li>
            </ul>
          </article>

          <article className="about-item">
            <h3>My Goals</h3>

            <p>
              My goal is to improve my programming and design skills and
              create systems that can solve real problems.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default App