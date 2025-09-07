export default function Home() {
  return (
    <div className="font-sans bg-background text-foreground">
      {/* Header */}
      <header className="bg-secondary text-foreground py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Tanu Construction</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#projects" className="hover:text-primary">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[url('/construction.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-10 rounded text-center">
          <h2 className="text-5xl text-white font-bold mb-4">Building Your Dreams</h2>
          <p className="text-white text-lg mb-6">
            High-quality construction services for residential and commercial projects.
          </p>
          <a href="#contact" className="bg-primary text-black font-bold px-6 py-3 rounded hover:bg-yellow-400 transition">Contact Us</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-secondary p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold mb-4">Residential Construction</h4>
              <p>Modern, quality homes built to your vision.</p>
            </div>
            <div className="bg-secondary p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold mb-4">Commercial Construction</h4>
              <p>Efficient and reliable commercial building solutions.</p>
            </div>
            <div className="bg-secondary p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold mb-4">Renovation & Remodeling</h4>
              <p>Transforming your spaces with quality craftsmanship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Contact Us</h3>
          <p className="mb-8">Start your construction journey with Tanu Construction today!</p>
          <form className="max-w-lg mx-auto bg-background p-6 rounded shadow space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 rounded border"/>
            <input type="email" placeholder="Email" className="w-full p-3 rounded border"/>
            <textarea placeholder="Message" className="w-full p-3 rounded border"></textarea>
            <button type="submit" className="bg-primary text-black px-6 py-3 rounded hover:bg-yellow-400 transition">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-foreground py-6 text-center">
        © 2025 Tanu Construction. All rights reserved.
      </footer>
    </div>
  )
}
