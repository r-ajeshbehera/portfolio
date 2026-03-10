import Link from "next/link";
import SkillBar from "../../components/SkillBar";

export default function About() {
  const skills = [
    { name: "C++ & DSA ", level: "90%" },
    { name: "HTML, CSS, JS", level: "90%" },
    { name: "React / Next.js", level: "85%" },
    { name: "Node / Express.js", level: "75%" },
    { name: "Python / Flask", level: "70%" },
    { name: "MongoDB / MySql", level: "75%" },
    { name: "VS code / Git & GitHub", level: "85%" },
  ];

  const education = [
    {
      degree: "B.Sc in Computer Science",
      institution: "DAV Autonomous college,titilagarh",
      year: "2025",
    },
    { degree: "Master in Computer Application (MCA)", institution: "Silicon University,Bbsr", year: "2025-27" },
  ];

  const certifications = [
    {
      name: "Software Engineering (IBM)",
      issuer: "Coursera",
      link: "/certificates/coursera_software_engineering_ctft.pdf",
    },
    {
      name: "Python Development (Microsoft)",
      issuer: "Coursera",
      link: "/certificates/Coursera_python_developer_ctft.pdf",
    },
    {
      name: "Cybersecurity (Google)",
      issuer: "Coursera",
      link: "/certificates/coursera_google_cybersecurity_certificate.pdf",
    },
  ];

  const address = [
    { label: "Location", value: "767040, Balangir, Odisha, India" },
    {
      label: "Email",
      value: "rajeshbehera.works@gmail.com",
      link: "mailto:rajeshbehera.works@gmail.com",
    },
    // {
    //   label: "Phone",
    //   value: "+91 934 831 3504",
    //   link: "https://wa.me/+919348313504",
    // },
  ];

  return (
    <main style={{ paddingTop: "2.5rem" }}>
      <section className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="card about-card">
            <p className="centered-text">
              I’m Rajesh Behera, a passionate{" "}
              <b>Software Development Engineer (SDE)</b> who enjoys building
              smart, practical solutions — from websites and backend systems to
              automation tools and AI-powered features.
              <br />
              With a strong foundation in DSA with C++ , MERN, Python, Flask, Next.js and
              MySQL.
              <br />
              I believe in writing clean, efficient code and continuously
              improving through problem-solving, documentation, and version
              control (Git/GitHub).
              <br />
              I’m actively exploring advanced topics like FastAPI, data
              handling, and full-stack integration and I’m always excited to
              learn new technologies.
              <br />
              <br />
              <b>Objective:</b>
              <br />
              I’m currently seeking opportunities to work on meaningful
              projects, contribute to a collaborative tech team, and grow as a
              full-time, <b>Software Development Engineer </b>or Backend
              Engineer.
              <br />
              #MAANG Prep #Open to SDE Roles and & Internship.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="card skills-card">
            <div className="grid-1-2-3">
              {skills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="card education-card">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div>
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                </div>
                <p>{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="card certifications-card">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <div>
                  <h3>{cert.name}</h3>
                  <p>{cert.issuer}</p>
                </div>
                <a
                  href={cert.link}
                  className="btn-cert-view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Contact Information</h2>
          <div className="card contact-info-card">
            <center>
              <h2>
                <p>
                  <b>let's collab on your next project.</b>
                </p>
              </h2>
            </center>
            {(() => {
              const emailItem = address.find((item) => item.label === "Email");
              const phoneItem = address.find((item) => item.label === "Phone");
              const locationItem = address.find(
                (item) => item.label === "Location"
              );
              const reorderedAddress = [
                ...(emailItem ? [emailItem] : []),
                ...(phoneItem ? [phoneItem] : []),
                ...(locationItem ? [locationItem] : []),
              ];

              return reorderedAddress.map((item, index) => (
                <div key={index} className="address-item">
                  <p>{item.label}:</p>
                  {item.link ? (
                    <a href={item.link} className="link-hover">
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              ));
            })()}
            <div className="flex justify-end">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
