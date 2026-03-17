import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import ToolCard from "../components/ToolCard";
import ContactForm from "../components/ContactForm";
import headerImage from "../assets/header.jpg";
import { projects, experiences, tools } from "../utils/Info";


export default function Home() {
  const handleToolClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors flex flex-col">
      <Navbar />

      <div className="w-full px-4 pb-4 pt-24 flex-1">
        <header className="relative mx-auto mb-12 w-full max-w-7xl overflow-hidden rounded-4xl rounded-tl-none rounded-br-none border border-text-light/10 bg-surface-light shadow-lg dark:border-text-dark/10 dark:bg-surface-dark">
          <img
            src={headerImage}
            alt="Header"
            className="h-64 w-full object-cover object-[50%_75%] md:h-80 lg:h-104"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/68 to-transparent dark:from-black dark:via-black/82 dark:to-transparent" />
        </header>

        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-y-12 gap-x-20 lg:grid-cols-[260px_1fr]">
          <aside className="w-full justify-self-center flex justify-center lg:block lg:justify-start lg:justify-self-auto lg:sticky lg:top-24 self-start">
            <ImageCard />
          </aside>

          <main>
            <h1 className="type-heading font-bold text-text-light dark:text-text-dark mb-8 lg:pr-32">
              SOFTWARE ENGINEER
            </h1>
            <p className="type-text text-text-light/80 dark:text-text-dark/80 max-w-3xl mb-12 lg:pr-40">
              Passionate about building scalable systems with clean, maintainable code and thoughtful architecture. I enjoy turning complex product requirements into reliable software, from designing backend services and data flows to delivering polished user experiences. I focus on performance, clarity, and long-term maintainability so teams can ship faster and iterate with confidence.
            </p>

            <section className="mb-12">
              <h2 className="type-heading font-bold text-text-light dark:text-text-dark mb-6">
                MY <br /> PROJECTS
              </h2>
              <div className="grid grid-cols-1 gap-6">
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
              <h2 className="type-heading font-bold text-text-light dark:text-text-dark mb-6">
                MY <br /> EXPERIENCE
              </h2>
              <div className="grid grid-cols-1 gap-6">
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
              <h2 className="type-heading font-bold text-text-light dark:text-text-dark mb-6">
                MY <br /> TOOLS
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
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

            <section className="mb-12 grow">
              <h2 className="type-heading font-bold text-text-light dark:text-text-dark mb-6">
                CONTACT <br /> ME
              </h2>
              <div>
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