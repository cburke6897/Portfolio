import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
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
              CONTACT <br /> ME
            </h1>

            <section className="mb-12 grow max-w-2xl">
              <ContactForm />
            </section>

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
