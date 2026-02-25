import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";

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
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-text-light dark:text-text-dark mb-8">
              SOFTWARE ENGINEER
            </h1>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}