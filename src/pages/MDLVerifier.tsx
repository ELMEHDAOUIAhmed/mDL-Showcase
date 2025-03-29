import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Fingerprint, Globe, Shield, RefreshCw } from 'lucide-react';

const MDLVerifier = () => {
  // Placeholder screenshots - replace with actual app screenshots
  const screenshots = [
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=600"
  ];

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-400" />,
      title: "Robust Data Retrieval",
      description: "Support for both offline (NFC, BLE, QR) and online (WebAPI, OIDC) data retrieval methods."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Integrity Verification",
      description: "Validate data integrity and authenticity using cryptographic mechanisms and session encryption."
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-blue-400" />,
      title: "Binding Confirmation",
      description: "Ensure legitimate holder verification through physical-digital binding confirmation."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-purple-400" />,
      title: "Flexible Engagement",
      description: "Multiple secure connection methods with controlled data retention and reader authentication."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Interoperability",
      description: "Cross-authority validation support with standardized data models and transmission protocols."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          MDL Verifier Application
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Efficient and secure digital license verification compliant with ISO/IEC DIS 18013-5
        </p>

        {/* Application Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Application Showcase
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {screenshots.map((src, index) => (
              <div key={index} className="glass-card rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <img
                  src={src}
                  alt={`MDL Verifier Screenshot ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MDLVerifier;