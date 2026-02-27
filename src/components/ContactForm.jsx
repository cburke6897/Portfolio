import { useEffect, useState, useRef} from "react";
import ReCaptcha from "react-google-recaptcha";

const RECAPTCHA_KEY = '6LdsJHksAAAAAPyOGDU04CVbK8xlpWReYAHFytTq'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default function ContactForm() {
  const [state, setState] = useState({})
  const [message, setMessage] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [theme, setTheme] = useState(() => (
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  ));

  const reCaptchaRef = useRef();

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

  const handleChange = (e) => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const onSubmit = (e) => {
    console.log("Submitting form with state:", state);
    e.preventDefault();

    console.log(encode({
      'form-name': "contact",
      ...state,
    }));

    fetch(window.location.pathname, {
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
          setMessage("Message sent successfully!");
          setState({});
        } else {
          setMessage("Failed to send message.");
        }
      })
      .catch(() => {
        setMessage("An error occurred while sending the message");
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
    </form>
  );
}
