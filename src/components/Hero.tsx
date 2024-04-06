import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  const skillsUrlArray: {
    url: string;
    title: string;
  }[] = [
    { url: "/Images/angular.svg", title: "Angular" },
    { url: "/Images/react.png", title: "React" },
    { url: "/Images/dotnet.svg", title: "Dotnet" },
    { url: "/Images/docker.svg", title: "Docker" },
    {
      url: "https://git-scm.com/images/logos/downloads/Git-Logo-White.svg",
      title: "Git",
    },
    { url: "/Images/github.svg", title: "Github" },
    { url: "/Images/bootstrap.svg", title: "Bootstrap" },
    { url: "/Images/aws.svg", title: "AWS" },
    { url: "/Images/ts.svg", title: "Typescript" },
    { url: "/Images/mysql.png", title: "MySQL" },
    { url: "/Images/sql-server.svg", title: "SQL Server" },
    {
      url: "https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg",
      title: "PostgreSQL",
    },
    {
      url: "/Images/ubuntu.svg",
      title: "Ubuntu",
    },
    {
      url: "/Images/jenkins.png",
      title: "Jenkins",
    },
    {
      url: "/Images/notion.svg",
      title: "Notion",
    },
  ];

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="gradient"> &lt;Ayush&gt; </span>
          </a>
          <button
            className="btn navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              style={{ height: 20, color: "white" }}
              icon={faBars}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-form">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="hero"
        className="hero d-flex flex-column justify-content-evenly align-items-center"
      >
        <div>
          <img src="/Images/Me.webp" alt="Ayush Aher" className="hero-img" />
        </div>
        <div className="hero-intro">
          <div className="title">
            <span className="gradient"> Hello, I&apos;m Ayush Aher,</span> Tech
            Consultant
            <br />& Jr. Full-Stack Developer
          </div>
          <p className="">
            Hey there! I&apos;m Ayush Aher, your friendly neighborhood Fullstack
            Web Developer. I&apos;ve been in the game for almost 3 years,
            building and managing web applications, and websites. Anything on
            your mind? Hit me up!
          </p>
        </div>
        <div className="my-4 d-flex justify-content-center align-items-center">
          <a className="social-link" href="https://github.com/AyushAher">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="social-link"
            href="mailto:ayushaher118@gmail.com;developers.ramson@gmail.com;info@ramson-developers.com;"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a className="social-link" href="tel:8237482904">
            <FontAwesomeIcon icon={faMobile} />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/ayushaher118/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com/ayushaher118/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="btn-resume-container">
          <a href="./Ayush Aher.pdf" className="btn-resume">
            <span> Download Resume </span>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div id="skills" className="col-md-8 skills border-skills">
          <h3 className="text-center text-decoration-underline gradient">
            Skills
          </h3>
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            {skillsUrlArray.map((x) => (
              <div
                key={x.title}
                className="col-md-2 d-flex justify-content-center align-items-center mx-3"
              >
                <img
                  src={x.url}
                  alt={x.title}
                  title={x.title}
                  className="skill-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
