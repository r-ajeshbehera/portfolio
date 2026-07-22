import Link from "next/link";
import SkillBar from "../../components/SkillBar";

export const metadata = {
  title: "About - Rajesh Behera",
  description:
    "MCA student focused on Java, Data Structures, and building efficient software solutions. Learn about my skills, education, and certifications.",
};

export default function About() {
  const skills = [
    { name: "Java", level: "80%" },
    { name: "Data Structures & Algorithms", level: "70%" },
    { name: "Object-Oriented Programming (OOP)", level: "75%" },
    { name: "HTML, CSS, JavaScript", level: "75%" },
    { name: "SQL (MySQL)", level: "70%" },
    { name: "Operating Systems", level: "65%" },
    { name: "Computer Networks", level: "65%" },
    { name: "Git & GitHub", level: "75%" },
  ];

  const education = [
    {
      degree: "B.Sc in Computer Science",
      institution: "DAV Autonomous college, Titilagarh",
      year: "2025",
    },
    { degree: "Master in Computer Application (MCA)", institution: "Silicon University,Bhubaneswar", year: "2025-27" },
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
            {/* Was previously a <p> wrapping several <p> children, which is
                invalid HTML -- browsers auto-close the outer <p> as soon as
                they hit the first nested one, so the DOM didn't actually
                match this markup. Using a <div> here keeps the same
                "centered-text" styling but produces valid, predictable
                markup and avoids a React hydration mismatch. */}
            <div className="centered-text">
              <p>
                <strong>I’m Rajesh Behera, an MCA student focused on building a strong foundation in software development.</strong>
              </p>

              <p>
                I am currently strengthening my skills in <strong>Java, Data Structures, Object-Oriented Programming, and core computer science subjects</strong> such as DBMS, Operating Systems, and Computer Networks.
              </p>

              <p>
                I enjoy solving programming problems and building practical applications that improve my understanding of real-world software development.
              </p>

              <p>
                I have experience working with web technologies like <strong>HTML, CSS, and JavaScript</strong>, and I continuously improve my coding skills through regular practice and project development.
              </p>

              <p>
                <strong>Objective</strong>
              </p>

              <p>
                I am seeking an entry-level Software Engineer role in a service-based organization where I can apply my skills, learn from experienced professionals, and grow as a software developer.
              </p>

              <p>
                Software Engineer
                <br />
                Open to Internship and Entry-Level Opportunities
              </p>
            </div>
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
                  <b>Let’s connect for opportunities and collaboration.</b>
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
