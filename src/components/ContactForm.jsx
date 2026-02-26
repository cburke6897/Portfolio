import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function ContactForm() {
  const [result, setResult] = useState(null);

  const onCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "9c425fb7-29a8-4633-a930-0aee96006428");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult({
      success: data.success,
      message: data.message || (data.success ? "Message sent successfully!" : "Failed to send message")
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
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
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
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
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
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
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
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
        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          reCaptchaCompat={false}
          onVerify={onCaptchaChange}
          theme="dark"
          size="normal"
        />
        
        <button
          type="submit"
          className="flex-1 h-19.5 px-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-xl font-semibold rounded-lg transition-colors"
        >
          Send Message
        </button>
      </div>
      {result && (
        <p className={`text-center text-sm font-medium ${
          result.success 
            ? "text-green-600 dark:text-green-400" 
            : "text-red-600 dark:text-red-400"
        }`}>
          {result.message}
        </p>
      )} 
    </form>
  );
}
