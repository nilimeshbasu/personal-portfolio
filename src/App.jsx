import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
