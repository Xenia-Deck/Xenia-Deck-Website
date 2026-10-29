import { useLayoutEffect, useRef } from 'react'
import './App.css'

const repoUrl = 'https://github.com/Xenia-Deck/Xenia-Deck'
const appLogoUrl = `${import.meta.env.BASE_URL}AppLogo.png`

const screenshots = {
  library:
    'https://store-images.s-microsoft.com/image/apps.54391.14535789018900745.43fd22b3-63d8-4253-9a5a-a795900bcf4e.e33cdc9f-d2e7-4386-a9a1-a9505b18f7ae',
  manage:
    'https://store-images.s-microsoft.com/image/apps.6766.14535789018900745.43fd22b3-63d8-4253-9a5a-a795900bcf4e.f61ffde7-da97-4847-8590-4656f149b180',
}

function BrandMark() {
  return <img className="brand-logo" src={appLogoUrl} alt="" aria-hidden="true" />
}

function StoreBadge() {
  const badgeRef = useRef(null)

  useLayoutEffect(() => {
    badgeRef.current?.setAttribute('theme', 'auto')
  }, [])

  return (
    <span className="store-badge-wrap">
      <ms-store-badge
        ref={badgeRef}
        productid="9p3m272md942"
        productname="Xenia Deck"
        window-mode="direct"
        theme="auto"
        size="large"
        language="en"
        animation="on"
      />
    </span>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Xenia Deck home">
          <BrandMark />
          <span>Xenia Deck</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
          <a className="nav-github" href={repoUrl} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <h1>Manage your<br /><span>Xenia library.</span></h1>
            <p className="hero-description">
              Organize your Xenia setup and keep your Xbox 360 games together
              in one library.
            </p>
            <div className="hero-actions">
              <StoreBadge />
              <a className="button button-secondary" href={repoUrl} target="_blank" rel="noreferrer">
                Explore on GitHub
              </a>
            </div>
            <p className="availability">Free on the Microsoft Store</p>
          </div>

          <div className="hero-art" aria-label="Preview of the Xenia Deck game library">
            <div className="art-glow" />
            <div className="screenshot-frame">
              <img src={screenshots.library} alt="Xenia Deck game library screen" />
            </div>
            <div className="floating-card">
              <span className="floating-icon"><BrandMark /></span>
              <span><strong>Game library</strong><small>Managed with Xenia Deck</small></span>
              <span className="status-dot" aria-label="Ready" />
            </div>
          </div>
        </section>

        <section className="feature-strip" id="features" aria-label="Features">
          <article className="feature">
            <span className="feature-number">01</span>
            <h2>Game library</h2>
            <p>Keep your Xbox 360 game collection organized in one place.</p>
          </article>
          <article className="feature">
            <span className="feature-number">02</span>
            <h2>Xenia setup</h2>
            <p>Manage your emulator setup from the app.</p>
          </article>
          <article className="feature">
            <span className="feature-number">03</span>
            <h2>Windows app</h2>
            <p>Built with a Fluent-inspired interface for Windows 10 and 11.</p>
          </article>
        </section>

        <section className="showcase" id="screenshots">
          <div className="showcase-heading">
            <h2>A look at the app</h2>
            <p>A simpler way to set up Xenia and manage your game library.</p>
          </div>
          <div className="showcase-grid">
            <figure className="showcase-card showcase-library">
              <img src={screenshots.library} alt="Browse your game library in Xenia Deck" loading="lazy" />
              <figcaption><span>01</span> Your game library</figcaption>
            </figure>
            <figure className="showcase-card showcase-manage">
              <img src={screenshots.manage} alt="Manage Xenia with Xenia Deck" loading="lazy" />
              <figcaption><span>02</span> Manage your setup</figcaption>
            </figure>
          </div>
        </section>

        <section className="closing-cta">
          <BrandMark />
          <div>
            <p className="eyebrow">XENIA DECK</p>
              <h2>Available from the Microsoft Store</h2>
          </div>
          <StoreBadge />
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top"><BrandMark /><span>Xenia Deck</span></a>
        <p>Xenia Deck is not affiliated with the Xenia emulator project.</p>
        <a href={repoUrl} target="_blank" rel="noreferrer">Open source on GitHub <span aria-hidden="true">↗</span></a>
      </footer>
    </div>
  )
}

export default App
