import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark transition-colors">
      <Navbar />

      <div className="mx-auto w-full max-w-6xl px-4 pb-4 pt-24">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-24 self-start">
            <ImageCard />
          </aside>

          <main>
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-[60vh]">
              <div className="max-w-2xl text-center space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold">
                  Welcome to My <span className="text-primary dark:text-primary-dark">Portfolio</span>
                </h1>
                
                <p className="text-lg md:text-xl text-text-light/80 dark:text-text-dark/80">
                  Crafting beautiful and functional web experiences
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <button className="px-8 py-3 rounded-lg bg-button dark:bg-button-dark hover:bg-button-hover dark:hover:bg-button-hover-dark text-text-light dark:text-text-dark font-semibold transition-colors">
                    View My Work
                  </button>
                  <button className="px-8 py-3 rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-black/5 dark:hover:bg-white/10 text-text-light dark:text-text-dark font-semibold transition-colors border border-text-light/20 dark:border-text-dark/20">
                    Get In Touch
                  </button>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-surface-light dark:bg-surface-dark rounded-2xl px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  What I Offer
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Responsive Design",
                      description: "Beautiful interfaces that work on all devices"
                    },
                    {
                      title: "Modern Technologies",
                      description: "Built with the latest tools and frameworks"
                    },
                    {
                      title: "Clean Code",
                      description: "Well-organized, maintainable code practices"
                    }
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg bg-bg-light dark:bg-bg-dark border border-text-light/10 dark:border-text-dark/10 hover:border-primary dark:hover:border-primary-dark transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-primary dark:text-primary-dark mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-text-light/70 dark:text-text-dark/70">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}