import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { SectionHeader } from "./shared/SectionHeader";
import { IconBox } from "./shared/IconBox";
import { CONTACT_INFO, type ContactInfo } from "../data";

/* ── Constants ─────────────────────────────────────────────────────── */

const EMAILJS_SERVICE_ID = "service_xeytylf";
const EMAILJS_TEMPLATE_ID = "template_mv4lf09";
const EMAILJS_PUBLIC_KEY = "L7Szysma4SonHakck";

/* ── Sub-components ────────────────────────────────────────────────── */

function ContactInfoItem({ item }: { item: ContactInfo }) {
  const content = item.href ? (
    <a
      href={item.href}
      className="text-gray-600 hover:text-blue-500 transition-colors font-body"
    >
      {item.value}
    </a>
  ) : (
    <span className="text-gray-600 font-body">{item.value}</span>
  );

  return (
    <div className="flex items-center gap-6 group">
      <IconBox
        icon={item.icon}
        size="lg"
        className="bg-white shadow-sm border border-gray-100 group-hover:bg-blue-50 transition-colors"
      />
      <div>
        <h4 className="font-heading font-semibold text-gray-900 text-lg mb-1">
          {item.label}
        </h4>
        {content}
      </div>
    </div>
  );
}

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  isTextarea?: boolean;
}

function FormField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  isTextarea = false,
}: FormFieldProps) {
  const inputClasses =
    "w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all duration-300 font-body";

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 mb-2 font-body"
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder={placeholder}
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
}

/* ── Main component ────────────────────────────────────────────────── */

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setSending(true);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In Touch"
          subtitle="Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10 bg-gray-50/50 p-8 lg:p-10 rounded-3xl border border-gray-100"
          >
            {CONTACT_INFO.map((item) => (
              <ContactInfoItem key={item.label} item={item} />
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40"
          >
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <FormField
                id="name"
                name="from_name"
                label="Name"
                placeholder="John Doe"
              />
              <FormField
                id="email"
                name="from_email"
                label="Email"
                type="email"
                placeholder="john@example.com"
              />
              <FormField
                id="message"
                name="message"
                label="Message"
                placeholder="Your message here..."
                isTextarea
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 mt-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {sending ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
