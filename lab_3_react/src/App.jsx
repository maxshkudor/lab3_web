import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="mx-auto max-w-4xl rounded-xl border border-line bg-white p-5 shadow-2xl shadow-plum/15 sm:p-8 md:p-12 dark:border-night-line dark:bg-night-card dark:shadow-black/50">
      <Header name="Шкудор Максим" role="Студент-програміст" />
      <main className="my-6 grid gap-6 md:grid-cols-2">
        <About />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer name="Шкудор Максим" />
    </div>
  )
}

export default App
