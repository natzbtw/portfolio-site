import "./App.css";

const projects = [
  {
    no: "01",
    type: "SOFTWARE ENGINEERING / QA",
    title: "Client software project",
    text: "Led quality assurance for an academic project developed for Asceoft. Wrote test cases, documented defects, verified fixes, created automated test scripts, and coordinated QA responsibilities.",
    tags: ["Test cases", "Automation", "Team leadership"],
  },
  {
    no: "02",
    type: "FULL-STACK WEB",
    title: "Establishment review app",
    text: "Co-developed a review application with React and MongoDB, implementing login session logic and core features while verifying role-based access control.",
    tags: ["React", "MongoDB", "RBAC"],
  },
  {
    no: "03",
    type: "ARTIFICIAL INTELLIGENCE",
    title: "Sokoban solver bot",
    text: "Co-developed a Java puzzle solver with map handling and state generation. Compared A* and Greedy Best-First Search using custom heuristics.",
    tags: ["Java", "Search algorithms", "Heuristics"],
  },
  {
    no: "04",
    type: "GAME DEVELOPMENT",
    title: "Plants vs. Zombies recreation",
    text: "Built a Java recreation in a two-person team, developing model and controller logic, Swing interface features, and playtesting the game.",
    tags: ["Java Swing", "MVC", "Debugging"],
  },
];

function App() {
  return (
    <div className="desktop" id="top">
      <div className="topline">
        <span>✳ LEELANCZE’S CORNER OF THE WEB</span>
        <span>PERSONAL PORTFOLIO / EST. 2026</span>
      </div>
      <div className="site-shell">
        <header className="browser-bar">
          <div className="browser-title">
            <span>✦</span> lancze.exe{" "}
            <span className="title-muted">— personal portfolio</span>
          </div>
          <div className="window-controls" aria-hidden="true">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </div>
        </header>
        <div className="address-bar">
          <span>Address</span>
          <div>https://lancze.online / home</div>
          <span className="go">GO ↗</span>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top">
            LP<span>✳</span>
          </a>
          <div>
            <a href="#about">about</a>
            <a href="#work">projects</a>
            <a href="#experience">experience</a>
            <a href="#contact">contact ↗</a>
          </div>
        </nav>
        <main>
          <section className="hero" id="about">
            <div className="hero-copy">
              <div className="status">
                <span className="status-dot"></span> HELLO WORLD! WELCOME TO MY
                PAGE.
              </div>
              <p className="intro">COMPUTER SCIENCE STUDENT &amp; BUILDER</p>
              <h1>
                Hi, I’m
                <br />
                <em>Leelancze.</em>
                <span className="asterisk">✳</span>
              </h1>
              <p className="lead">
                I like figuring out how things work—and making them work better.
              </p>
              <p className="body-copy">
                I’m a Software Technology student at De La Salle University,
                exploring software development, quality assurance, and the
                possibilities of intelligent systems.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  EXPLORE MY WORK <span>↘</span>
                </a>
                <a className="text-link" href="#contact">
                  Say hello ↗
                </a>
              </div>
            </div>
            <div
              className="hero-art"
              aria-label="Decorative retro computer illustration"
            >
              <div className="art-label">
                A LITTLE BIT ABOUT ME <span>✳</span>
              </div>
              <div className="monitor">
                <div className="screen">
                  <div className="screen-top">
                    <span>● ● ●</span>
                    <span>MY_DESKTOP</span>
                  </div>
                  <div className="screen-content">
                    <div className="pixel-star">✳</div>
                    <span>
                      BUILD.
                      <br />
                      TEST.
                      <br />
                      LEARN.
                    </span>
                    <small>:) KEEP CREATING</small>
                  </div>
                </div>
                <div className="monitor-bottom">
                  <span>lancze™</span>
                  <span>●</span>
                </div>
              </div>
              <div className="stand"></div>
              <div className="base"></div>
              <div className="art-caption">
                <span>FIG. 01 — ALWAYS CURIOUS</span>
                <span>✦ ✦ ✦</span>
              </div>
            </div>
          </section>
          <div className="ticker">
            <span>✳ SOFTWARE DEVELOPMENT</span>
            <span>✳ QUALITY ASSURANCE</span>
            <span>✳ INTELLIGENT SYSTEMS</span>
            <span>✳ CREATIVE PROBLEM SOLVING</span>
          </div>
          <section className="section work" id="work">
            <div className="section-heading">
              <div>
                <p className="section-index">01 / THE PROJECT DIRECTORY</p>
                <h2>
                  Things I’ve <em>worked on.</em>
                </h2>
              </div>
              <p>
                A selection of academic projects, from testing client software
                to teaching a computer to solve puzzles.
              </p>
            </div>
            <div className="project-list">
              {projects.map((p) => (
                <article className="project" key={p.no}>
                  <div className="project-number">
                    {p.no} <span>↗</span>
                  </div>
                  <div className="project-main">
                    <p className="project-type">{p.type}</p>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <div className="tags">
                      {p.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-icon" aria-hidden="true">
                    {p.no === "01"
                      ? "✓"
                      : p.no === "02"
                        ? "✳"
                        : p.no === "03"
                          ? "⌘"
                          : "☺"}
                  </div>
                </article>
              ))}
            </div>
            <p className="footnote">
              END OF DIRECTORY <span>✳</span> MORE TO COME
            </p>
          </section>
          <section className="section about-section" id="experience">
            <div className="section-heading">
              <div>
                <p className="section-index">02 / A LITTLE BACKGROUND</p>
                <h2>
                  Always a <em>work in progress.</em>
                </h2>
              </div>
            </div>
            <div className="about-grid">
              <div className="about-story">
                <p className="big-copy">
                  Curious by nature.
                  <br />
                  Detail-oriented by practice.
                </p>
                <p>
                  My interests sit between building software and making sure it
                  works well. I enjoy collaborative problem-solving, digging
                  into tricky bugs, and learning the ideas behind intelligent
                  systems.
                </p>
                <p>
                  Beyond the code, I’m especially interested in computer vision
                  and industrial automation, and how they can help optimize
                  autonomous systems.
                </p>
                <div className="sticker">
                  MADE WITH
                  <br />
                  <strong>CURIOSITY</strong>
                  <br />✦ &amp; COFFEE ✦
                </div>
              </div>
              <div className="info-stack">
                <div className="info-box">
                  <div className="box-title">
                    EDUCATION <span>− □ ×</span>
                  </div>
                  <div className="box-content">
                    <p className="mini">
                      DE LA SALLE UNIVERSITY / EXPECTED 2028
                    </p>
                    <h3>BS Computer Science</h3>
                    <p>
                      Major in Software Technology
                      <br />
                      CGPA: 3.567
                      <br />
                      Dean’s List: First Honors, Terms 4–6
                      <br />
                      Second Honors, Terms 1–3
                    </p>
                  </div>
                </div>
                <div className="info-box">
                  <div className="box-title">
                    THE TOOLBOX <span>− □ ×</span>
                  </div>
                  <div className="box-content">
                    <p className="mini">LANGUAGES &amp; TOOLS</p>
                    <p>
                      Java · Python · C · JavaScript · React · Git/GitHub · Java
                      Swing · MongoDB
                    </p>
                    <p className="mini">ALSO EXPLORED</p>
                    <p>R · Rust · Kotlin · HTML/CSS</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contact" id="contact">
            <div>
              <p className="section-index">03 / YOU’VE GOT MAIL</p>
              <h2>
                Let’s make
                <br />
                <em>something good.</em>
              </h2>
              <p>
                Interested in software development, QA, or a good problem to
                solve? I’d love to connect.
              </p>
              <div className="contact-links">
                <a href="mailto:leelancze1111@gmail.com">EMAIL ME ↗</a>
                <a
                  href="https://www.linkedin.com/in/lancze/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LINKEDIN ↗
                </a>
              </div>
            </div>
            <div className="envelope" aria-hidden="true">
              <div>✉</div>
              <span>INBOX OPEN!</span>
            </div>
          </section>
        </main>
        <footer>
          <span>© 2026 LEELANCZE PACOMIO</span>
          <span>THANKS FOR STOPPING BY! ✳</span>
          <a href="#top">BACK TO TOP ↑</a>
        </footer>
      </div>
      <div className="bottomline">
        <span>DESIGNED WITH A LITTLE NOSTALGIA</span>
        <span>BEST VIEWED WITH CURIOSITY ✦</span>
      </div>
    </div>
  );
}
export default App;
