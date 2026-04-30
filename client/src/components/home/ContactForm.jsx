"use client";
import { motion } from "framer-motion";
import { useContactForm } from "@/hooks/useContactForm";

const SOCIAL_LINKS = [
  {
    label: "Mail",
    href: "mailto:sabarish0630@gmail.com",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sabarish-g-520ba4369",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://www.behance.net/sabarish2001",
    icon: (
      <span className="w-4 h-4 rounded-sm bg-[#1769ff] text-white text-[9px] flex items-center justify-center font-bold flex-shrink-0">
        Bē
      </span>
    ),
  },
];

const SERVICE_OPTIONS = [
  "UI/UX Design",
  "Frontend Development",
  "Graphic Design",
  "Branding",
  "Video Editing",
  "Other",
];

const PORTFOLIO_TOOLS = [
  { label: "Figma", icon: "◈" },
  { label: "Photoshop", icon: "Ps" },
  { label: "Behance", icon: "Bē" },
];

export default function ContactForm() {
  const {
    formRef,
    loading,
    errors,
    showSuccess,
    showError,
    errorMessage,
    handleSubmit,
  } = useContactForm();

  return (
    <section className="py-10 px-4 border-t border-black/[0.08] bg-[#fafafa]">
      <div className="max-w-xl mx-auto flex flex-col items-center">

        {/* Connect With Me */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6 w-full"
        >
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-1">
            Connect With Me
          </h2>

          <div className="h-1.5 w-16 bg-[#F5E800] rounded-sm mx-auto mb-5" />

          <div className="flex flex-wrap gap-3 justify-center">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/[0.12] text-sm text-[#3a3a3a] bg-white hover:border-[#F5E800] hover:bg-[#F5E800] hover:text-[#1a1a1a] transition-all duration-200"
              >
                {social.icon}
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-2 select-none"
          aria-hidden="true"
        >
          <div className="text-6xl">🧑‍💻</div>
        </motion.div>

        {/* Success */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm text-center"
          >
            Message sent successfully! I&apos;ll get back to you soon.
          </motion.div>
        )}

        {/* Error */}
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center"
          >
            {errorMessage || "Failed to send message. Please try again."}
          </motion.div>
        )}

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-white rounded-2xl p-8 shadow-sm border border-black/[0.08]"
        >
          <h3 className="text-center text-xl font-bold text-[#1a1a1a] mb-1">
            Contact me
          </h3>

          <p className="text-center text-sm text-[#555] mb-6">
            Cultivating Connections: Reach Out And Connect With Me
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
            noValidate
          >

            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={`w-full border rounded-lg px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#F5E800] focus:ring-2 focus:ring-[#F5E800]/30 transition-all ${
                    errors.name
                      ? "border-red-500 bg-red-50"
                      : "border-black/[0.12]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={`w-full border rounded-lg px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#F5E800] focus:ring-2 focus:ring-[#F5E800]/30 transition-all ${
                    errors.email
                      ? "border-red-500 bg-red-50"
                      : "border-black/[0.12]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className={`w-full border rounded-lg px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#F5E800] focus:ring-2 focus:ring-[#F5E800]/30 transition-all ${
                    errors.phone
                      ? "border-red-500 bg-red-50"
                      : "border-black/[0.12]"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="relative">
                <select
                  name="service"
                  defaultValue=""
                  className={`w-full appearance-none border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F5E800] focus:ring-2 focus:ring-[#F5E800]/30 transition-all bg-white pr-8 ${
                    errors.service
                      ? "border-red-500 bg-red-50 text-red-700"
                      : "border-black/[0.12] text-[#555]"
                  }`}
                >
                  <option value="" disabled>
                    Service Of Interest
                  </option>

                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>

                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#555] text-xs">
                  ▾
                </span>

                {errors.service && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.service}
                  </p>
                )}
              </div>

            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Project Details..."
                className={`w-full border rounded-lg px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#F5E800] focus:ring-2 focus:ring-[#F5E800]/30 transition-all resize-none ${
                  errors.message
                    ? "border-red-500 bg-red-50"
                    : "border-black/[0.12]"
                }`}
              />

              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
              type="submit"
              disabled={loading}
              className={`bg-[#F5E800] text-[#1a1a1a] font-bold px-8 py-3 rounded-xl text-sm transition-colors inline-flex items-center gap-2 cursor-pointer w-full justify-center ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-[#e0d600]"
              }`}
            >
              {loading ? (
                <>
                  Sending...
                </>
              ) : (
                <>
                  Send
                </>
              )}
            </motion.button>

          </form>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center w-full"
        >
          <h4 className="text-[#1a1a1a] font-bold text-xl mb-5">
            Portfolio Made with
          </h4>

          <div className="flex flex-wrap gap-3 justify-center">
            {PORTFOLIO_TOOLS.map((tool) => (
              <span
                key={tool.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/[0.12] text-sm text-[#3a3a3a] bg-white"
              >
                <span className="text-xs font-bold opacity-80">
                  {tool.icon}
                </span>
                {tool.label}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}