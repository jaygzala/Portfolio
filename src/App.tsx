import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-darker font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Side Email Email layout for larger screens */}
      <div className="hidden lg:flex fixed bottom-0 right-10 flex-col items-center gap-6 text-slate-400">
        <a
          href="mailto:[Your Email Address]"
          className="[writing-mode:vertical-rl] font-mono text-sm tracking-widest hover:text-primary hover:-translate-y-2 transition-all"
        >
          [Your Email Address]
        </a>
        <div className="w-[1px] h-24 bg-slate-600"></div>
      </div>
    </div>
  )
}

export default App
