import { useState, useEffect } from "react";
import { emailjsConfig, type EmailTemplateParams } from "../../config/emailjs";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

export default function ConnectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(emailjsConfig.publicKey);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: emailjsConfig.toEmail,
        subject: emailjsConfig.defaultSubject,
      };
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full p-3 lg:p-6">
      <h2 className="text-lg lg:text-xl font-bold mb-2 lg:mb-6 font-mono transition-colors duration-300 group-hover/form:text-purple-300">
        function sendMessage() {"{"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-base lg:text-lg font-mono mb-1"
          >
            const name = "
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
            className="w-full px-3 lg:px-4 py-2 lg:py-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-foreground border border-white/50 hover:border-white/100 transition-all duration-300 ease-in-out hover:bg-white/5 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 group-hover/form:border-blue-400/50"
          />
          <span className="block text-lg font-mono mt-1">";</span>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-base lg:text-lg font-mono mb-1"
          >
            const email = "
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
            required
            className="w-full px-3 lg:px-4 py-2 lg:py-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-foreground border border-white/50 hover:border-white/100 transition-all duration-300 ease-in-out hover:bg-white/5 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 group-hover/form:border-blue-400/50"
          />
          <span className="block text-lg font-mono mt-1">";</span>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-base lg:text-lg font-mono mb-1"
          >
            const message = `
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            placeholder="Tell me about your project, ideas, or just say hello..."
            required
            className="w-full px-3 lg:px-4 py-2 lg:py-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-foreground border border-white/50 hover:border-white/100 transition-all duration-300 ease-in-out resize-none hover:bg-white/5 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 group-hover/form:border-blue-400/50"
          ></textarea>
          <span className="block text-lg font-mono mt-1">`;</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-4 lg:mt-8 px-3 lg:px-6 py-2 lg:py-3 font-semibold rounded-md transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-xl hover:-translate-y-1 group-hover/form:shadow-blue-500/50 ${
            isSubmitting
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-foreground hover:bg-orange-500 hover:shadow-orange-500/50 group-hover/form:bg-orange-500"
          }`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="text-white">Sending...</span>
            </>
          ) : (
            <span className="text-white">return sendMessage();</span>
          )}
        </button>
      </form>

      <p className="text-lg lg:text-xl font-bold text-white mt-4 lg:mt-6 font-mono">
        {"}"}
      </p>
    </div>
  );
}
