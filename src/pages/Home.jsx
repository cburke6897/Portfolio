import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import ToolCard from "../components/ToolCard";
import ContactForm from "../components/ContactForm";
import { projects, experiences, tools } from "../utils/Info";


export default function Home() {
  const handleToolClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors flex flex-col">
      <Navbar />

      <div className="mx-auto w-full max-w-6xl px-4 pb-4 pt-24 flex-1 flex">
        <div className="grid gap-y-12 gap-x-20 lg:grid-cols-[260px_1fr] w-full">
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

            <section className="mb-12 grow">
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