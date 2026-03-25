import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import portfolioData from './data/portfolio.json'

export default function App() {
  return (
    <div className="noise min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero data={portfolioData} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} personal={portfolioData.personal} />
        <Experience
          experience={portfolioData.experience}
          education={portfolioData.education}
        />
        <Contact personal={portfolioData.personal} />
      </main>
      <Footer />
    </div>
  )
}