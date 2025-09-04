import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { HeroSection } from "../components/HeroSection"
import { About } from "../components/About"
import { Skills } from "../components/Skills"
import { Projects } from "../components/Projects"
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Background effects */}
          <StarBackground />

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main>
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
    )
}
