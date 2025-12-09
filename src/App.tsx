import './App.css'
import Header from './components/layout/Header.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'

function App() {
  return (
    <div className="site-root">
      <Header />
      <Home />
      <About />
    </div>
  )
}

export default App