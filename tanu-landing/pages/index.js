import { useEffect, useState } from 'react';

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [darkMode, setDarkMode] = useState(false);
  const [particles, setParticles] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll parallax
  const handleScroll = () => setOffsetY(window.scrollY);

  // Mouse parallax
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Generate subtle particles for Hero section
    const tempParticles = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 4,
      speed: Math.random() * 0.5 + 0.1,
    }));
    setParticles(tempParticles);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Dark mode toggle
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className="font-sans bg-background dark:bg-black text-foreground dark:text-white transition-colors duration-500">
      
      {/* Header */}
      <header className="bg-secondary dark:bg-gray-900 text-foreground dark:text-white py-6 shadow-md fixed w-full z-50 transition-colors duration-500">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold animate-pulse">Tanu Construction</h1>

          {/* Hamburger button for mobile */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Navigation Menu */}
          <nav className={`absolute top-full left-0 w-full bg-secondary dark:bg-gray-900 md:static md:w-auto md:flex md:items-center transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 p-4 md:p-0">
              <li>
                <a href="#services" className="hover:text-primary transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
              </li>
              <li className="md:ml-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="px-4 py-2 bg-primary text-black dark:text-white dark:bg-yellow-400 rounded hover:opacity-80 transition"
                >
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/construction.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: `calc(50% + ${mousePos.x}px) calc(${offsetY * 0.5}px + ${mousePos.y}px)`,
        }}
      >
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-100"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.y}%`,
              left: `${p.x}%`,
              backgroundColor: 'white',
              animation: `float ${p.speed * 8}s ease-in-out infinite alternate`,
            }}
          ></div>
        ))}

        <div className="p-10 rounded text-center animate-fade-in-up transition duration-1000 ease-out">
          <h2 className="text-5xl text-white font-bold mb-4 transform translate-y-10 opacity-0 animate-slide-up hover:scale-105 transition-transform duration-500">
            Building Your Dreams
          </h2>
          <p className="text-white text-lg mb-6 opacity-0 transform translate-y-6 animate-slide-up delay-200 hover:text-yellow-300 transition-colors duration-500">
            High-quality construction services for residential and commercial projects.
          </p>
          <a href="#contact" className="bg-primary text-black font-bold px-6 py-3 rounded hover:bg-yellow-400 transition transform hover:scale-105 duration-300 hover:shadow-lg opacity-0 animate-fade-in-up delay-400">
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background dark:bg-black">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12 animate-fade-in-up">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-secondary dark:bg-gray-800 p-6 rounded shadow hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 duration-300 animate-fade-in-up">
              <h4 className="text-2xl font-semibold mb-4">Residential Construction</h4>
              <p>Modern, quality homes built to your vision.</p>
            </div>
            <div className="bg-secondary dark:bg-gray-800 p-6 rounded shadow hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 duration-300 animate-fade-in-up">
              <h4 className="text-2xl font-semibold mb-4">Commercial Construction</h4>
              <p>Efficient and reliable commercial building solutions.</p>
            </div>
            <div className="bg-secondary dark:bg-gray-800 p-6 rounded shadow hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 duration-300 animate-fade-in-up">
              <h4 className="text-2xl font-semibold mb-4">Renovation & Remodeling</h4>
              <p>Transforming your spaces with quality craftsmanship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6 animate-fade-in">Contact Us</h3>
          <p className="mb-8 animate-slide-up">Start your construction journey with Tanu Construction today!</p>
          <form className="max-w-lg mx-auto bg-background dark:bg-black p-6 rounded shadow space-y-4 animate-fade-in-up">
            <input type="text" placeholder="Name" className="w-full p-3 rounded border focus:ring-2 focus:ring-primary transition"/>
            <input type="email" placeholder="Email" className="w-full p-3 rounded border focus:ring-2 focus:ring-primary transition"/>
            <textarea placeholder="Message" className="w-full p-3 rounded border focus:ring-2 focus:ring-primary transition"></textarea>
            <button type="submit" className="bg-primary text-black dark:text-white dark:bg-yellow-400 px-6 py-3 rounded hover:bg-yellow-400 transition transform hover:scale-105 duration-300 hover:shadow-lg">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary dark:bg-gray-900 text-foreground dark:text-white py-6 text-center animate-fade-in transition-colors duration-500">
        © 2025 Tanu Construction. All rights reserved.
      </footer>

      {/* Tailwind custom float animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
