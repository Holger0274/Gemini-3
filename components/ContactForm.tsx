import React, { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="glass-card rounded-3xl p-8 md:p-12 border-t border-white/10 shadow-2xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-neonMagenta/20 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-starkWhite mb-4">
              Lassen Sie uns <span className="text-electricBlue">starten</span>
            </h2>
            <p className="text-slateBlue">
              Keine Sales-Floskeln. Ein ehrliches Gespräch über Ihre Möglichkeiten.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Anfrage erhalten!</h3>
              <p className="text-slateBlue">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-electricBlue hover:text-white transition-colors"
              >
                Neue Anfrage senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-deepSpace/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electricBlue focus:border-transparent transition-all"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-deepSpace/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-electricBlue focus:border-transparent transition-all"
                    placeholder="max@firma.de"
                  />
                </div>
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

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-neonMagenta to-purple-600 hover:from-purple-600 hover:to-neonMagenta text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(249,0,147,0.4)] hover:shadow-[0_0_30px_rgba(249,0,147,0.6)] transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  'Gespräch anfragen'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;