
import React, { useState } from 'react';
import { getGrowthAdvice } from '../services/advisorClient';

const Chatbot: React.FC = () => {
  const [input, setInput] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    const result = await getGrowthAdvice(input);
    setAdvice(result || "Consult with our experts for a detailed plan.");
    setLoading(false);
  };

  return (
    <section id="advisor" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 blur-3xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <span className="text-green-400 font-bold text-xs uppercase tracking-widest mb-4 block">Beta Feature</span>
              <h2 className="text-3xl font-black mb-6">AI Growth Advisor</h2>
              <p className="text-gray-400 mb-8">
                Tell our AI strategist about your business goals, and get an instant recommendation on which Infinity Growth Tech services you need.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g., 'I want to scale my Shopify store and improve my Instagram presence...'"
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-400/50 min-h-[120px]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-brand text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] disabled:opacity-50 transition-all"
                >
                  {loading ? 'Consulting Strategist...' : 'Get Instant Strategy'}
                </button>
              </form>
            </div>

            <div className="flex-1 w-full min-h-[300px] flex flex-col">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Recommended Roadmap</div>
              <div className="flex-1 bg-black/40 rounded-2xl border border-white/5 p-6 overflow-y-auto max-h-[400px]">
                {advice ? (
                  <div className="prose prose-invert prose-green whitespace-pre-wrap text-sm leading-relaxed text-gray-300">
                    {advice}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center text-gray-600 italic">
                    <svg className="w-12 h-12 mb-4 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    Input your goals to see your roadmap
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
