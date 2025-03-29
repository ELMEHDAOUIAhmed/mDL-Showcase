import React from 'react';

const TechStack = () => {
  const techIcons = {
    flutter: "https://camo.githubusercontent.com/05657067105d9cbeb6ec490cb07b55187b6314827fe77597b5aace1f7a13cd7b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f666c75747465722f666c75747465722d6f726967696e616c2e737667",
    riverpod: "https://riverpod.dev/img/logo.svg",
golang:"https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_LightBlue.svg",
    python: "https://www.svgrepo.com/show/452091/python.svg"
  };

  return (
    <section id="tech" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 reveal-on-scroll">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Technical Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Frontend</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <img src={techIcons.flutter} alt="Flutter" className="w-8 h-8 object-contain" />
                  <span className="text-gray-300">Flutter for cross-platform development</span>
                </li>
                <li className="flex items-center gap-4">
                  <img src={techIcons.riverpod} alt="Riverpod" className="w-8 h-8" />
                  <span className="text-gray-300">Riverpod for state management</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Backend</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <img src={techIcons.golang} alt="Golang" className="w-8 h-8 object-contain" />
                  <span className="text-gray-300">Go for robust backend services</span>
                </li>
                <li className="flex items-center gap-4">
                  <img src={techIcons.python} alt="Python" className="w-8 h-8 object-contain" />
                  <span className="text-gray-300">Python for face recognition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;