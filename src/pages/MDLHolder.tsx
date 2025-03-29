import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Wifi, RefreshCw } from 'lucide-react';

const MDLHolder = () => {
  // Placeholder screenshots - replace with actual app screenshots
  const screenshots = [
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=600"
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Personal Data Control",
      description: "Securely store and manage your driving license data including personal information, portrait, biometric templates, and signature."
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-400" />,
      title: "Selective Data Release",
      description: "Choose which data elements to share with verifiers and pre-authorize release of non-mandatory data elements."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-400" />,
      title: "Data Update & Flexibility",
      description: "Support for frequent license information updates with structured data model for consistency."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Security & Privacy",
      description: "Multiple security mechanisms including digital signatures, encryption, and device authentication."
    },
    {
      icon: <Wifi className="w-8 h-8 text-blue-400" />,
      title: "Offline/Online Capability",
      description: "Operate without internet using offline data retrieval (NFC/BLE) or provide online tokens for additional features."
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
          MDL Holder Application
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Secure and convenient mobile driving license management based on ISO/IEC DIS 18013-5
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
                  alt={`MDL Holder Screenshot ${index + 1}`}
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

export default MDLHolder;