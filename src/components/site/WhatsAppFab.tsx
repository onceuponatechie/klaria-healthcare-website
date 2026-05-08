import { motion } from "framer-motion";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=15555550123&text=Hi%20Klaria%2C%20I%27d%20like%20to%20book%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, type: "spring", damping: 18 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 group"
      aria-label="Message us on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.74_0.16_150)] blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
      <span className="relative grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-float ring-4 ring-white/40">
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor" aria-hidden>
          <path d="M16 3C9 3 3.4 8.6 3.4 15.6c0 2.5.7 4.8 1.9 6.8L3 29l6.8-2.2a12.6 12.6 0 0 0 6.2 1.6h.01c7 0 12.6-5.6 12.6-12.6S23 3 16 3zm0 22.9c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4 1.3 1.3-3.9-.2-.4a10.4 10.4 0 1 1 8.6 4.7zm5.7-7.8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6 0a8.5 8.5 0 0 1-2.5-1.5 9.6 9.6 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.2-.4c.1-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a3.4 3.4 0 0 0-1 2.5c0 1.5 1 2.9 1.2 3.1.1.2 2.2 3.4 5.4 4.8 3.2 1.4 3.2.9 3.8.9.6-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5l-.4-.5z"/>
        </svg>
      </span>
    </motion.a>
  );
}
