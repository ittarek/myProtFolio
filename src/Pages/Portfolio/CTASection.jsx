import { ArrowRight } from 'lucide-react';
import React from 'react'

export const CTASection = ({ ctaRef }) => {
  return (
    <section className="mt-24 text-center">
      <div
        ref={ctaRef}
        className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl border border-blue-500/20 p-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Me?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Let's create something amazing together. Get in touch to discuss your next
          project.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/md-tariqul-islam-ab42b61a1/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <span>Get In Touch</span>
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};
