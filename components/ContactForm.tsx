import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-electricBlue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neonMagenta/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "rounded-3xl p-8 md:p-12 relative overflow-hidden",
            "backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5",
            "border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
          )}
        >
          {/* Animated Background Glow */}
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            animate={{
              background: [
                "radial-gradient(circle, rgba(249,0,147,0.3) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(96,175,255,0.3) 0%, transparent 70%)",
                "radial-gradient(circle, rgba(249,0,147,0.3) 0%, transparent 70%)",
              ],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ filter: "blur(80px)" }}
          />

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-starkWhite mb-4">
              Lassen Sie uns <span className="text-electricBlue">starten</span>
            </h2>
            <p className="text-slateBlue">
              Keine Sales-Floskeln. Ein ehrliches Gespräch über Ihre Möglichkeiten.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="relative w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle2 className="w-8 h-8 text-green-500" />
                <div className="absolute -inset-2 bg-green-500/30 rounded-full blur-xl animate-pulse" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-white mb-2"
              >
                Anfrage erhalten!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-slateBlue"
              >
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </motion.p>
              <motion.button
                onClick={() => setSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 text-electricBlue hover:text-neonMagenta transition-colors font-medium"
              >
                Neue Anfrage senden
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="space-y-2 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Name *</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={cn(
                        "w-full bg-deepSpace/50 border rounded-xl px-4 py-3 text-white transition-all duration-300",
                        "focus:outline-none focus:bg-deepSpace/70",
                        focusedField === 'name'
                          ? "border-electricBlue shadow-[0_0_20px_rgba(96,175,255,0.3)]"
                          : "border-white/10 hover:border-white/20"
                      )}
                      placeholder="Max Mustermann"
                    />
                    {focusedField === 'name' && (
                      <motion.div
                        layoutId="inputGlow"
                        className="absolute -inset-1 bg-gradient-to-r from-electricBlue/20 to-neonMagenta/20 rounded-xl blur-lg -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </motion.div>
                <motion.div
                  className="space-y-2 relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">E-Mail *</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={cn(
                        "w-full bg-deepSpace/50 border rounded-xl px-4 py-3 text-white transition-all duration-300",
                        "focus:outline-none focus:bg-deepSpace/70",
                        focusedField === 'email'
                          ? "border-electricBlue shadow-[0_0_20px_rgba(96,175,255,0.3)]"
                          : "border-white/10 hover:border-white/20"
                      )}
                      placeholder="max@firma.de"
                    />
                    {focusedField === 'email' && (
                      <motion.div
                        layoutId="inputGlow"
                        className="absolute -inset-1 bg-gradient-to-r from-electricBlue/20 to-neonMagenta/20 rounded-xl blur-lg -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-300 ml-1">Unternehmen</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full bg-deepSpace/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electricBlue focus:border-transparent transition-all"
                    placeholder="Muster GmbH"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-medium text-slate-300 ml-1">Interesse</label>
                  <div className="relative">
                    <select
                      id="interest"
                      name="interest"
                      className="w-full bg-deepSpace/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electricBlue focus:border-transparent appearance-none"
                    >
                      <option className="bg-navy">Consulting</option>
                      <option className="bg-navy">Schulung</option>
                      <option className="bg-navy">Automatisierung</option>
                      <option className="bg-navy">Sonstiges</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-white/10 pl-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-deepSpace/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electricBlue focus:border-transparent transition-all resize-none"
                  placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1 w-4 h-4 rounded bg-deepSpace border-white/20 text-electricBlue focus:ring-electricBlue"
                />
                <label htmlFor="privacy" className="text-xs text-slate-400">
                  Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden.
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="relative w-full bg-gradient-to-r from-neonMagenta to-purple-600 text-white font-bold py-4 rounded-xl overflow-hidden flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group/submit"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-neonMagenta opacity-0 group-hover/submit:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    'Gespräch anfragen'
                  )}
                </span>
                {!loading && (
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-neonMagenta to-purple-600 rounded-xl opacity-0 group-hover/submit:opacity-70 blur-xl -z-10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;