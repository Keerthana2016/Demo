import { BrowserRouter, MemoryRouter, Routes, Route, Link } from 'react-router-dom'

// The standalone preview file uses MemoryRouter (no server needed).
// The real site uses BrowserRouter with clean URLs.
const Router = import.meta.env.VITE_PREVIEW === '1' ? MemoryRouter : BrowserRouter
import Navbar from './components/Navbar.jsx'
import { Footer, ScrollManager } from './components/Shared.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import { EnquiryProvider } from './components/EnquiryModal.jsx'

function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <h1 className="section__title">Page not found</h1>
        <p className="section__sub">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
        <Link className="btn btn--primary" to="/">Back to home</Link>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <Router>
      <EnquiryProvider>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      </EnquiryProvider>
    </Router>
  )
}
