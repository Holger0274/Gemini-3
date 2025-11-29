import React from 'react';
import { BlogPost } from '../types';
import { ArrowRight } from 'lucide-react';

const posts: BlogPost[] = [
  {
    id: '1',
    category: 'KI-Strategie',
    title: 'Warum 80% der KI-Projekte scheitern (und wie Sie es vermeiden)',
    excerpt: 'Häufig fehlt nicht die Technologie, sondern die klare Zielsetzung. Eine Analyse der häufigsten Fehler.',
    readTime: '5 Min',
    date: '15. Nov 2024',
    image: 'https://picsum.photos/800/450?random=1'
  },
  {
    id: '2',
    category: 'Automation',
    title: 'Make.com vs. Zapier: Der große Vergleich für Enterprise',
    excerpt: 'Datenschutz, Kosten und Skalierbarkeit. Welches Tool passt zu Ihrer IT-Infrastruktur?',
    readTime: '7 Min',
    date: '10. Nov 2024',
    image: 'https://picsum.photos/800/450?random=2'
  },
  {
    id: '3',
    category: 'Case Study',
    title: 'Wie ein Logistiker durch KI-Dokumentenanalyse 20h/Woche spart',
    excerpt: 'Ein Einblick in die Implementierung von OCR und LLMs in der Praxis.',
    readTime: '4 Min',
    date: '02. Nov 2024',
    image: 'https://picsum.photos/800/450?random=3'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-navy">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-starkWhite mb-2">
              Insights & <span className="text-electricBlue">Ressourcen</span>
            </h2>
            <p className="text-slateBlue">Bleiben Sie auf dem neuesten Stand der Technologie.</p>
          </div>
          <button className="text-white flex items-center gap-2 hover:text-neonMagenta transition-colors font-medium">
            Alle Artikel ansehen <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-deepSpace rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-electricBlue/10 transition-all group">
              <div className="aspect-video bg-gray-800 overflow-hidden relative">
                 <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                    loading="lazy"
                 />
                 <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-electricBlue border border-white/10">
                    {post.category}
                 </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-white mb-3 group-hover:text-electricBlue transition-colors">
                  {post.title}
                </h3>
                <p className="text-slateBlue text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-xs text-slate-500 pt-4 border-t border-white/5">
                  <span>{post.readTime} Lesezeit</span>
                  <span className="mx-2">•</span>
                  <time>{post.date}</time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;