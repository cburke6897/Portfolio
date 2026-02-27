import { useEffect, useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({})
  const [message, setMessage] = useState(null);
  const [theme, setTheme] = useState(() => (
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  ));

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => {
      setTheme(root.classList.contains("dark") ? "dark" : "light");
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", { method: "POST", body: formData })
      .then(response => {
        if (response.ok) {
          setMessage("Message sent successfully!");
          form.reset();
        } else {
          setMessage("Failed to send message.");
        }
      })
      .catch(() => {
        setMessage("Failed to send message.");
      });
  };

  return (
    <form
      name = "contact"
      method = "POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2" htmlFor="name-input">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2" htmlFor="email-input">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2" htmlFor="subject-input">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Message subject"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2" htmlFor="message-input">
          Message
        </label>
        <textarea
          name="message"
          required
          rows="6"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Your message..."
        />
      </div>

      <div className="flex items-center justify-between gap-4 py-4">
        <div className={`py-4 flex justify-start ${theme === "dark" ? "invert" : ""}`}>
          <div data-netlify-recaptcha="true"></div>
        </div>

        <button
          type="submit"
          className="flex-1 h-18 px-6 bg-submit-button hover:bg-submit-button-hover dark:bg-submit-button-dark dark:hover:bg-submit-button-hover-dark text-white text-xl font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-submit-button disabled:dark:hover:bg-submit-button-dark"
        >
          Send Message
        </button>
      </div>

      <div className="min-h-8 flex items-center justify-center mt-4">
        {message && (
          <p className={`text-center text-sm font-medium ${
            message.includes("successfully") 
              ? "text-green-600 dark:text-green-400" 
              : "text-red-600 dark:text-red-400"
          }`}>
            {message}
          </p>
        )}
      </div>
    </form>
  );
}