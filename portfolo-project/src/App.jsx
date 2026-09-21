import profilePhoto from './assets/profile.jpg'
import './App.css'

function App() {
  return (
    <>
      {/* ACTIVITY 1: INTRODUCE YOURSELF */}
      <section id="home" className="hero-section">
        <img
          src={profilePhoto}
          className="profile-photo"
          alt="Meryanne Junn Bacsin Cloma"
        />

        <div className="hero-content">
          <p className="greeting">Hello! I am</p>

          <h1>Meryanne Junn Bacsin Cloma</h1>

          <p className="introduction">
            I am a Bachelor of Science in Information Systems student who
            enjoys learning and exploring without limitations. I am interested
            in personal growth, peace, creativity, and technology.
          </p>

          <p className="introduction">
            I prefer UI/UX design over back-end development, but I am still
            willing to learn both areas and challenge myself through new
            experiences.
          </p>

          <p className="tagline">
            I want to live a happy and peaceful life while creating useful
            systems that make work easier and more organized.
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
          I am an Information Systems student who enjoys discovering new
          knowledge and participating in extracurricular activities. I am
          currently improving my digital skills, especially in UI/UX design,
          system development, and Information Systems. I want to use these
          skills to produce meaningful and well-developed outputs for my
          future clients.
        </p>

        <div className="about-content">
          <article className="about-item">
            <h3>Student Leadership</h3>

            <p>
              I currently serve as the CCIS Local Student Government
              Treasurer. As a student leader, I advocate transparency and
              responsible financial management.
            </p>

            <p>
              I want student funds to support meaningful projects that are
              useful and beneficial to CCIS students.
            </p>
          </article>

          <article className="about-item">
            <h3>ROTC Service</h3>

            <p>
              I am a graduate advanced cadet officer of the CSU Main ROTC
              Unit. I served for three years as an advanced cadet officer and
              became part of the brigade staff.
            </p>

            <p>
              I served as the Brigade Civil-Military Operations Officer, or
              S7. This experience helped me develop discipline, confidence,
              leadership, and commitment to service.
            </p>
          </article>

          <article className="about-item">
            <h3>Sports and Achievements</h3>

            <p>
              I enjoy badminton, pickleball, and sepak takraw. Badminton is my
              strongest sport, and I am proud to have become a back-to-back
              SANGKA badminton champion.
            </p>

            <p>
              Sports have taught me discipline, teamwork, patience, and the
              importance of continuing even when situations become difficult.
            </p>
          </article>

          <article className="about-item">
            <h3>Hobbies and Interests</h3>

            <ul>
              <li>Designing websites and prototypes</li>
              <li>Learning about new technologies</li>
              <li>Creating digital presentations</li>
              <li>Listening to music</li>
              <li>Trying new things</li>
              <li>Playing sports</li>
              <li>Joining extracurricular activities</li>
              <li>Inspiring and serving fellow students</li>
            </ul>
          </article>
        </div>

        <div className="goal-section">
          <h3>My Goal</h3>

          <p>
            My goal is to become a better version of myself without limiting
            what I can learn or accomplish. I want to challenge expectations,
            explore new opportunities, and prove that women can succeed in
            different areas of leadership, technology, and service.
          </p>

          <p>
            I also want to grow through the struggles I experience, learn how
            to heal, and continue improving myself. Whenever I experience
            setbacks, I want to find the strength to rise again.
          </p>

          <p>
            Ultimately, I hope to live a happy and peaceful life while
            creating useful systems that make work easier and more organized.
          </p>
        </div>
      </section>
    </>
  )
}

export default App