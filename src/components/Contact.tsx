import { useState, useRef, useEffect } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

import {
  emailConfig,
  sendContactEmail,
  validateEmail,
} from "../../config/emailjs.config.ts";

import {
  ChevronRight,
  ExternalLink,
  Github,
  PhoneIncomingIcon,
  MailIcon,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  submitting: boolean;
  success: boolean;
  error: string;
}

emailjs.init(emailConfig.publicKey);

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    success: false,
    error: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus((prev) => ({ ...prev, error: "Please enter your name" }));
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus((prev) => ({ ...prev, error: "Please enter a valid email" }));
      return;
    }

    if (!formData.message.trim()) {
      setStatus((prev) => ({ ...prev, error: "Please enter your message" }));
      return;
    }

    setStatus({ submitting: true, success: false, error: "" });

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus({
        submitting: false,
        success: true,
        error: "",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } else {
      setStatus({
        submitting: false,
        success: false,
        error: result.error || "Failed to send message. Please try again.",
      });
    }
  };

  useEffect(() => {
    if (status.error) {
      setStatus((prev) => ({ ...prev, error: "" }));
    }
  }, [formData.name, formData.email, formData.message]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="text-white min-h-screen pb-12 px-4 md:px-8 md:pt-22 lg:pt-30 "
      id="contact"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center pb-8 md:pb-12 ">
        Let's Work Together
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
          <div className="lg:w-1/2">
            <div className="flex flex-col space-y-6 md:space-y-8">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                I'm always open to discussing{" "}
                <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                  creative opportunities
                </span>{" "}
                and{" "}
                <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                  innovative projects
                </span>
                . Let's build something amazing together!
              </p>

              <div className="flex flex-col space-y-6">
                <a
                  href="tel:+2347063816175"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-linear-to-r from-gray-900/50 to-gray-800/30 hover:from-cyan-900/20 hover:to-blue-900/20 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative p-3 rounded-lg bg-linear-to-br from-gray-900 to-gray-800 border border-gray-700 group-hover:border-cyan-500/50">
                      <PhoneIncomingIcon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Phone</span>
                    <span className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                      +234 706 381 6175
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 ml-auto group-hover:text-cyan-400 transition-colors" />
                </a>

                <a
                  href="mailto:bimbolaokunade@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-linear-to-r from-gray-900/50 to-gray-800/30 hover:from-cyan-900/20 hover:to-blue-900/20 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative p-3 rounded-lg bg-linear-to-br from-gray-900 to-gray-800 border border-gray-700 group-hover:border-cyan-500/50">
                      <MailIcon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Email</span>
                    <span className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                      bimbolaokunade@gmail.com
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 ml-auto group-hover:text-cyan-400 transition-colors" />
                </a>

                <a
                  href="https://github.com/Abeem007?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-linear-to-r from-gray-900/50 to-gray-800/30 hover:from-cyan-900/20 hover:to-blue-900/20 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-500/10"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative p-3 rounded-lg bg-linear-to-br from-gray-900 to-gray-800 border border-gray-700 group-hover:border-cyan-500/50">
                      <Github className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">GitHub</span>
                    <span className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                      Abeem007
                    </span>
                    <span className="text-xs text-gray-600 group-hover:text-cyan-300 transition-colors truncate max-w-50 md:max-w-none">
                      github.com/Abeem007
                    </span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 ml-auto group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="relative bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 md:p-8 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Send me a{" "}
                    <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      message
                    </span>
                  </h2>
                  <p className="text-gray-400">
                    Got a project in mind? Let's make it happen!
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Oluwatade Emmanuel"
                      />
                      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-focus-within:from-cyan-500/5 group-focus-within:via-cyan-500/10 group-focus-within:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="oluwatade@example.com"
                      />
                      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-focus-within:from-blue-500/5 group-focus-within:via-blue-500/10 group-focus-within:to-blue-500/5 transition-all duration-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors"
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project, timeline, and budget..."
                      />
                      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-focus-within:from-purple-500/5 group-focus-within:via-purple-500/10 group-focus-within:to-purple-500/5 transition-all duration-500 pointer-events-none" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="group relative w-full py-4 px-6 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <span className="relative flex items-center justify-center gap-3">
                      {status.submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : status.success ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>

                  {status.error && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm">{status.error}</p>
                    </div>
                  )}

                  {status.success && (
                    <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400">
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm">
                        Message sent successfully! I'll get back to you within
                        24 hours.
                      </p>
                    </div>
                  )}
                </form>

                <div className="mt-6 pt-6 border-t border-gray-800/50">
                  <p className="text-center text-gray-500 text-sm">
                    I typically respond within{" "}
                    <span className="text-cyan-400">24 hours</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
