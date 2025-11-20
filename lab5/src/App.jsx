import './App.css'
import { hero, courses, companies } from './data'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">udemy-clone</div>
        <nav className="nav">
          <a>Categories</a>
          <a>Udemy Business</a>
          <a>Teach</a>
          <a>Login</a>
          <button className="btn small">Sign up</button>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1>{hero.title}</h1>
          <p className="muted">{hero.subtitle}</p>
          <div className="hero-ctas">
            <button className="btn primary">{hero.ctaPrimary}</button>
            <button className="btn ghost">{hero.ctaSecondary}</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="search-card">
            <input placeholder="What do you want to learn?" />
            <button className="btn">Search</button>
          </div>
          <div className="hero-stats">Join millions of learners worldwide</div>
        </div>
      </div>
    </section>
  )
}

function Courses() {
  return (
    <section className="courses container">
      <h2>Popular on our platform</h2>
      <div className="course-grid">
        {courses.map((c) => (
          <article className="course-card" key={c.id}>
            <div className="thumb" />
            <h3 className="course-title">{c.title}</h3>
            <div className="course-meta">{c.author}</div>
            <div className="course-bottom">
              <div className="rating">⭐ {c.rating}</div>
              <div className="price">{c.price}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Trusted() {
  return (
    <section className="trusted container">
      <p className="muted">Trusted by</p>
      <div className="companies">
        {companies.map((co) => (
          <div key={co.id} className="company">
            {co.name}
          </div>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Courses />
        <Trusted />
      </main>
    </div>
  )
}

export default App
