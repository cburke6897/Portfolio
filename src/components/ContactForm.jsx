import { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default function ContactForm() {
  const [state, setState] = useState({})
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["name", "email", "subject", "message"];
    const hasAllFields = requiredFields.every(
      (field) => String(state[field] || "").trim().length > 0
    );

    if (!hasAllFields) {
      setMessage({ type: "error", text: "Please fill out all required fields." });
      return;
    }

    if (!isValidEmail(state.email || "")) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    fetch("/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': "contact",
        ...state,
      }),
    })
      .then(response => {
        console.log("Form submission response:", response);
        if (response.ok) {
          setMessage({ type: "success", text: "Message sent successfully!" });
          setState({});
        } else {
          setMessage({ type: "error", text: "Failed to send message." });
        }
      })
      .catch(() => {
        setMessage({ type: "error", text: "An error occurred while sending the message" });
      });
  }

  return (
    <form
      name = "contact"
      method = "POST"
      data-netlify="true"
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
            value={state.name || ""}
            onChange={handleChange}
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
            value={state.email || ""}
            onChange={handleChange}
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
          value={state.subject || ""}
          onChange={handleChange}
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
          value={state.message || ""}
          onChange={handleChange}
          required
          rows="6"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Your message..."
        />
      </div>

      <div className="flex items-center justify-between gap-4 py-4">
        
        <button
          type="submit"
          className="flex-1 h-18 px-6 bg-submit-button hover:bg-submit-button-hover dark:bg-submit-button-dark dark:hover:bg-submit-button-hover-dark text-white text-xl font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-submit-button disabled:dark:hover:bg-submit-button-dark"
        >
          Send Message
        </button>
      </div>

      <div className="min-h-14">
        {message && (
          <div
            className={`rounded-lg border px-4 py-3 text-sm font-medium ${
              message.type === "success"
                ? "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-200"
                : "border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-600 dark:bg-rose-900/40 dark:text-rose-200"
            }`}
            role="status"
          >
            {message.text}
          </div>
        )}
      </div>
    </form>
  );
}
