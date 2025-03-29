import React from 'react';
import { Link } from 'react-router-dom';

const AppSection = () => {
  return (
    <section id="apps" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 reveal-on-scroll">
          <Link
            to="/mdl_holder"
            className="group glass-card rounded-xl transform hover:scale-105 transition-all cursor-pointer overflow-hidden"
          >
            <div className="flex flex-col items-center text-center p-8 space-y-4">
              <img 
                src="https://imgur.com/levjfMA.png" 
                alt="MDL Holder App" 
                className="w-24 h-24 object-contain group-hover:scale-110 transition-transform"
              />
              <h3 className="text-2xl font-semibold">mDL Holder App</h3>
              <p className="text-gray-400">
                Securely store and manage your mobile driving license
              </p>
            </div>
          </Link>

          <Link
            to="/mdl_verifier"
            className="group glass-card rounded-xl transform hover:scale-105 transition-all cursor-pointer overflow-hidden"
          >
            <div className="flex flex-col items-center text-center p-8 space-y-4">
              <img 
                src="https://imgur.com/TIACPCA.png" 
                alt="MDL Verifier App" 
                className="w-24 h-24 object-contain group-hover:scale-110 transition-transform"
              />
              <h3 className="text-2xl font-semibold">mDL Verifier App</h3>
              <p className="text-gray-400">
                Verify digital licenses with confidence and security
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppSection;