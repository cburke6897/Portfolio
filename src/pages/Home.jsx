import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import ToolCard from "../components/ToolCard";
import ContactForm from "../components/ContactForm";
import myLeagueImage from "../assets/myleague.png";
import urlCutrImage from "../assets/urlcutr.png";
import fastapiIcon from "../assets/fastapi.svg";
import viteIcon from "../assets/vite.svg";

const projects = [
  {
    image: urlCutrImage,
    link: "https://github.com/cburke6897/URL-Cutr",
    title: "URL Cutr",
    description: "A URL shortener with in-built user dashboard for managing and tracking shortened links.",
  },
  {
    image: myLeagueImage,
    link: "https://github.com/cburke6897/MyLeague-Fantasy-Tracker",
    title: "MyLeague",
    description: "A Java application built for class that enables drafting and managing a fantasy football league.",
  },
];

const experiences = [
  {
    title: "Education — Ball State University, IN",
    fromDate: "Aug 2024",
    toDate: "May 2028",
    description:
      "4.0 GPA. B.S. in Computer Science with a minor in Japanese. Concentrations in Web and Mobile Development, plus Data Analytics and Machine Learning.",
  },
  {
    title: "Teaching Assistant — Ball State University, Muncie, IN",
    fromDate: "Jan 2025",
    toDate: "Present",
    description:
      "Assisted 3 professors across 5 classes, tailoring support to each course. Tutored students in Python, Java, and core programming concepts while balancing 20 hours/week with classes, improving assignment outcomes.",
  },
  {
    title: "Research Assistant — Ball State University, Muncie, IN",
    fromDate: "Sep 2024",
    toDate: "Present",
    description:
      "Presented a peer-reviewed publication on digital media preservation as lead author; submitted a second work to an international conference. Built Python API pipelines with Pandas for large datasets, then analyzed in Excel and R with Quarto to produce visuals.",
  },
  {
    title: "Web Dev Intern — Nextech, Indianapolis, IN",
    fromDate: "Jun 2022",
    toDate: "Jul 2022",
    description:
      "Collaborated on a four-person team to deliver a React site in two months. Strengthened HTML and JavaScript skills through hands-on work and mentoring from local professionals.",
  },
];

const tools = [
  {
    stackIconName: "java",
    title: "Java",
    description: "Backend and desktop apps",
    link: "https://www.oracle.com/java/",
  },
  {
    stackIconName: "js",
    title: "JavaScript",
    description: "Interactive web applications",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    stackIconName: "python",
    title: "Python",
    description: "Data analysis and automation",
    link: "https://www.python.org/",
  },
  {
    stackIconName: "react",
    title: "React",
    description: "Component-based UI library",
    link: "https://react.dev",
  },
  {
    iconSrc: viteIcon,
    title: "Vite",
    description: "Fast build tool",
    link: "https://vite.dev",
  },
  {
    iconSrc: fastapiIcon,
    title: "FastAPI",
    description: "High-performance REST APIs",
    link: "https://fastapi.tiangolo.com",
  },
  {
    stackIconName: "postgresql",
    title: "PostgreSQL",
    description: "Powerful relational database",
    link: "https://www.postgresql.org/",
  },
  {
    stackIconName: "redis",
    title: "Redis",
    description: "In-memory data store",
    link: "https://redis.io",
  },
];

export default function Home() {
  const handleToolClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors">
      <Navbar />

      <div className="mx-auto w-full max-w-6xl px-4 pb-4 pt-24">
        <div className="grid gap-y-12 gap-x-20 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-24 self-start">
            <ImageCard />
          </aside>

          <main>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-text-light dark:text-text-dark mb-8 pr-32">
              SOFTWARE ENGINEER
            </h1>
            <p className="text-base md:text-lg text-text-light/80 dark:text-text-dark/80 max-w-2xl mb-12 pr-40">
              Passionate about building scalable systems with clean code. Experienced in designing robust architectures that solve real-world problems.
            </p>

            <section className="mb-12">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-text-light dark:text-text-dark mb-6">
                MY <br /> PROJECTS
              </h2>
              <div className="grid grid-cols-1 gap-6 -mx-4">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    image={project.image}
                    link={project.link}
                    title={project.title}
                    description={project.description}
                  />
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-text-light dark:text-text-dark mb-6">
                MY <br /> EXPERIENCE
              </h2>
              <div className="grid grid-cols-1 gap-6 -mx-4">
                {experiences.map((experience) => (
                  <ExperienceCard
                    key={experience.title}
                    title={experience.title}
                    description={experience.description}
                    fromDate={experience.fromDate}
                    toDate={experience.toDate}
                  />
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-text-light dark:text-text-dark mb-6">
                MY <br /> TOOLS
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tools.map((tool) => (
                  <ToolCard
                    key={tool.title}
                    stackIconName={tool.stackIconName}
                    iconSrc={tool.iconSrc}
                    title={tool.title}
                    description={tool.description}
                    onClick={() => handleToolClick(tool.link)}
                  />
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-text-light dark:text-text-dark mb-6">
                CONTACT <br /> ME
              </h2>
              <div className="max-w-2xl">
                <ContactForm />
              </div>
            </section>

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}