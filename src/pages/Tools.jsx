import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";
import ToolCard from "../components/ToolCard";
import { tools } from "../utils/Info";

export default function Tools() {
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

          <main className="flex flex-col">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-text-light dark:text-text-dark mb-8 pr-32">
              MY <br /> TOOLS
            </h1>

            <section className="mb-12 grow">
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

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
