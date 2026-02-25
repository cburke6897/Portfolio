import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    link: "#",
    title: "URL Cutr",
    description: "A URL shortener with in-built user dashboard for managing and tracking shortened links.",
  },
  {
    link: "#",
    title: "MyLeague",
    description: "A Java application built for class that enables drafting and managing a fantasy football league.",
  },
];

export default function Home() {
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

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}