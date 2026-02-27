import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../utils/Info";

export default function Projects() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors flex flex-col">
      <Navbar />

      <div className="mx-auto w-full max-w-6xl px-4 pb-4 pt-24 flex-1 flex">
        <div className="grid grid-cols-1 gap-y-12 gap-x-20 lg:grid-cols-[260px_1fr] w-full">
          <aside className="w-full justify-self-center flex justify-center lg:block lg:justify-start lg:justify-self-auto lg:sticky lg:top-24 self-start">
            <ImageCard />
          </aside>

          <main>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-text-light dark:text-text-dark mb-8 pr-32">
              MY <br /> PROJECTS
            </h1>

            <section className="mb-12 grow">
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

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
