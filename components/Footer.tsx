import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020c1b] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="font-montserrat font-bold text-2xl text-white">
              AI<span className="text-electricBlue">.mation</span>
            </a>
            <p className="text-slateBlue text-sm leading-relaxed">
              Wir befähigen den Mittelstand, durch künstliche Intelligenz und Automatisierung wettbewerbsfähig zu bleiben.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electricBlue hover:text-deepSpace transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electricBlue hover:text-deepSpace transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electricBlue hover:text-deepSpace transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-slateBlue text-sm">
              <li><a href="#schulungen" className="hover:text-electricBlue transition-colors">Schulungen</a></li>
              <li><a href="#consulting" className="hover:text-electricBlue transition-colors">Consulting</a></li>
              <li><a href="#automatisierung" className="hover:text-electricBlue transition-colors">Automatisierung</a></li>
              <li><a href="#blog" className="hover:text-electricBlue transition-colors">Insights</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Leistungen</h4>
            <ul className="space-y-4 text-slateBlue text-sm">
              <li>AI Readiness Check</li>
              <li>n8n & Make Workshops</li>
              <li>Custom LLM Chatbots</li>
              <li>Prozess-Mining</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-slateBlue text-sm">
              <li className="flex items-start gap-3">
                <span className="text-white">Email:</span>
                <a href="mailto:hallo@aimation.de" className="hover:text-electricBlue">hallo@aimation.de</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">Tel:</span>
                <a href="tel:+49123456789" className="hover:text-electricBlue">+49 (0) 30 123456</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">Ort:</span>
                <span>Tech Hub Berlin<br/>Torstraße 1<br/>10119 Berlin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © 2024 AI.mation GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;