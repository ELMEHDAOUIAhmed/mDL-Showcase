import React from 'react';

const SolutionShowcase = () => {
  return (
    <section
      id="solution"
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 reveal-on-scroll">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Mobile Driving License Solution
          </h2>
          <p className="text-xl text-gray-300 text-center">
            Built on ISO 18013-5 standards, our solution revolutionizes digital identity verification
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="glass-card p-6 rounded-lg transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Secure</h3>
              <p className="text-gray-300">
                Implementing the latest cryptographic standards to ensure your digital identity remains protected
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Compliant</h3>
              <p className="text-gray-300">
                Fully compliant with ISO 18013-5 standards for mobile driving license implementation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionShowcase;