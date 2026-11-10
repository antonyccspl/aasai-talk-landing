import { useState } from "react";
import "./App.css";

const WEB_APP_URL = "https://aasai-talk.vercel.app/";
const APK_DOWNLOAD_URL = "";
const COPYRIGHT_YEAR = new Date().getFullYear();

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={diagonal ? "arrow-icon arrow-icon--diagonal" : "arrow-icon"}
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.5A7.5 7.5 0 1 1 20 11.5Z" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M7.2 3.8 10 7.4 8.3 9.6a15 15 0 0 0 6.1 6.1l2.2-1.7 3.6 2.8-.9 3.3a2 2 0 0 1-2.2 1.4A19 19 0 0 1 2.5 6.9a2 2 0 0 1 1.4-2.2l3.3-.9Z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z" />
      <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
    </svg>
  );
}

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? " brand--footer" : ""}`} href="#top" aria-label="Aasai Talk home">
      <img src="/aasai-talk-logo.jpg" alt="" />
      <span>Aasai<span className="brand__accent">Talk</span></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <div className="announcement">
        <span className="announcement__dot" />
        A little more connection, wherever you are
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <nav className={menuOpen ? "main-nav main-nav--open" : "main-nav"} aria-label="Main navigation">
            <a href="#discover" onClick={closeMenu}>Discover</a>
            <a href="#how-it-works" onClick={closeMenu}>How it works</a>
            <a href="#get-started" onClick={closeMenu}>Get started</a>
            <a
              className="button button--nav"
              href={WEB_APP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Open Aasai Talk <ArrowIcon diagonal />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow__line" /> A place to meet and talk</p>
              <h1>Good conversations bring us <span>closer.</span></h1>
              <p className="hero-copy__body">
                Meet interesting people, share a message, or make it a voice or video call.
                Aasai Talk makes reaching out feel a little more human.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href={WEB_APP_URL} target="_blank" rel="noreferrer">
                  Open the web app <ArrowIcon diagonal />
                </a>
                {APK_DOWNLOAD_URL ? (
                  <a className="button button--secondary" href={APK_DOWNLOAD_URL} download>
                    <span className="button__platform-icon" aria-hidden="true">↓</span>
                    Download for Android
                  </a>
                ) : (
                  <button className="button button--secondary button--waiting" type="button" disabled>
                    <span className="button__platform-icon" aria-hidden="true">↓</span>
                    Android app coming soon
                  </button>
                )}
              </div>
              <p className="hero-note">
                <span className="hero-note__check" aria-hidden="true">✓</span>
                Use the web app on iPhone, iPad, or any device with a browser.
              </p>
            </div>

            <div className="hero-art" aria-label="A preview of conversations in Aasai Talk">
              <div className="hero-art__halo" />
              <div className="float-card float-card--top">
                <span className="float-card__icon float-card__icon--mint"><MessageIcon /></span>
                <span><strong>A good chat</strong><small>can start anywhere</small></span>
                <span className="float-card__sparkle"><SparkleIcon /></span>
              </div>
              <div className="phone">
                <div className="phone__frame">
                  <div className="phone__top">
                    <span>9:41</span><span className="phone__status"><i /><i /><i /></span>
                  </div>
                  <div className="phone__brand"><img src="/aasai-talk-logo.jpg" alt="" /><span>Aasai Talk</span><span className="phone__online">●</span></div>
                  <div className="phone__welcome">
                    <small>YOUR NEXT CONVERSATION</small>
                    <strong>People to<br />meet</strong>
                  </div>
                  <div className="person-card">
                    <div className="person-card__portrait person-card__portrait--one">
                      <span className="portrait-face">☺</span>
                      <span className="person-card__status">Available</span>
                    </div>
                    <div className="person-card__info">
                      <div><strong>Priya, 26</strong><span>Delhi</span></div>
                      <button type="button" aria-label="Like Priya">♡</button>
                    </div>
                    <div className="person-card__tags"><span>Music</span><span>Travel</span></div>
                  </div>
                  <div className="phone__quick-actions">
                    <span><i className="quick-action quick-action--chat"><MessageIcon /></i>Message</span>
                    <span><i className="quick-action quick-action--call"><PhoneIcon /></i>Call</span>
                    <span><i className="quick-action quick-action--video">▣</i>Video</span>
                  </div>
                  <div className="phone__tabbar"><i /><i /><i /><i /></div>
                </div>
              </div>
              <div className="float-card float-card--bottom">
                <span className="float-card__icon float-card__icon--coral"><PhoneIcon /></span>
                <span><strong>Make it a call</strong><small>when words are not enough</small></span>
                <span className="sound-wave" aria-hidden="true"><i /><i /><i /><i /><i /></span>
              </div>
              <span className="art-spark art-spark--one">✳</span>
              <span className="art-spark art-spark--two">✦</span>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>MEET</span><i /><span>MESSAGE</span><i /><span>CALL</span>
            <span className="hero-bottom__caption">YOUR NEXT HELLO IS JUST A TAP AWAY</span>
          </div>
        </section>

        <section className="values-strip" aria-label="Aasai Talk highlights">
          <div className="container values-strip__inner">
            <p><span>01</span> Meet people beyond your usual circle</p>
            <p><span>02</span> Chat, then call when it feels right</p>
            <p><span>03</span> Choose how and when you connect</p>
          </div>
        </section>

        <section className="section discover-section" id="discover">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow__line" /> CONNECTION, YOUR WAY</p>
                <h2>More than a hello.<br /><span>A conversation.</span></h2>
              </div>
              <p className="section-heading__aside">
                Whether you have a minute or an evening, find a comfortable way to say hello.
              </p>
            </div>
            <div className="feature-grid">
              <article className="feature-card feature-card--discovery">
                <div className="feature-card__top"><span className="feature-number">01 / DISCOVER</span><span className="feature-icon"><SparkleIcon /></span></div>
                <div className="feature-people" aria-hidden="true">
                  <span className="mini-avatar mini-avatar--peach">A</span>
                  <span className="mini-avatar mini-avatar--lilac">S</span>
                  <span className="mini-avatar mini-avatar--mint">M</span>
                  <span className="mini-avatar mini-avatar--yellow">R</span>
                  <span className="feature-people__plus">+</span>
                </div>
                <h3>Find someone new</h3>
                <p>Browse profiles, explore shared interests, and find people you’d like to know.</p>
                <span className="feature-card__link">A fresh face, a fresh start <span>↗</span></span>
              </article>
              <article className="feature-card feature-card--chat">
                <div className="feature-card__top"><span className="feature-number">02 / CHAT</span><span className="feature-icon feature-icon--coral"><MessageIcon /></span></div>
                <div className="chat-preview" aria-hidden="true">
                  <span className="chat-bubble chat-bubble--them">Hey! How’s your day going?</span>
                  <span className="chat-bubble chat-bubble--you">Pretty good now 😊</span>
                  <span className="chat-bubble chat-bubble--them chat-bubble--short">That’s nice to hear!</span>
                </div>
                <h3>Take it at your pace</h3>
                <p>Start with a message. Keep the conversation going whenever you’re ready.</p>
                <span className="feature-card__link">No rush, just real talk <span>↗</span></span>
              </article>
              <article className="feature-card feature-card--call">
                <div className="feature-card__top"><span className="feature-number">03 / CONNECT</span><span className="feature-icon feature-icon--plum"><PhoneIcon /></span></div>
                <div className="call-preview" aria-hidden="true">
                  <div className="call-preview__avatar">P<span /></div>
                  <span className="call-preview__wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>
                  <span className="call-preview__label">A little closer, voice to voice</span>
                </div>
                <h3>Hear the moment</h3>
                <p>Switch to an audio or video call when a voice says more than a text.</p>
                <span className="feature-card__link">Make it a conversation <span>↗</span></span>
              </article>
            </div>
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="container how-grid">
            <div className="how-copy">
              <p className="eyebrow eyebrow--light"><span className="eyebrow__line" /> EASY TO BEGIN</p>
              <h2>One hello.<br /><span>See where it goes.</span></h2>
              <p className="how-copy__body">Aasai Talk keeps the first step simple. Open the app, discover people, and choose the kind of conversation that feels right for you.</p>
              <a className="button button--light" href={WEB_APP_URL} target="_blank" rel="noreferrer">
                Start on the web <ArrowIcon diagonal />
              </a>
            </div>
            <div className="steps">
              <article className="step">
                <span className="step__number">01</span>
                <div><h3>Make yourself at home</h3><p>Create your profile and share a little about yourself.</p></div>
                <span className="step__symbol">↗</span>
              </article>
              <article className="step">
                <span className="step__number">02</span>
                <div><h3>Explore your way</h3><p>Browse profiles and find someone you’d like to talk with.</p></div>
                <span className="step__symbol">⌕</span>
              </article>
              <article className="step">
                <span className="step__number">03</span>
                <div><h3>Start the conversation</h3><p>Send a message or connect on an audio or video call.</p></div>
                <span className="step__symbol">↗</span>
              </article>
            </div>
          </div>
        </section>

        <section className="platform-section" id="get-started">
          <div className="container platform-card">
            <div className="platform-card__content">
              <p className="eyebrow"><span className="eyebrow__line" /> YOUR DEVICE, YOUR CHOICE</p>
              <h2>Ready when<br />you are.</h2>
              <p>Use Aasai Talk in your browser today. Prefer an app? The Android download will be available here soon.</p>
              <div className="platform-actions">
                <a className="button button--primary" href={WEB_APP_URL} target="_blank" rel="noreferrer">
                  Open the web app <ArrowIcon diagonal />
                </a>
                {APK_DOWNLOAD_URL ? (
                  <a className="button button--outline" href={APK_DOWNLOAD_URL} download>Get the Android app <span>↓</span></a>
                ) : (
                  <button className="button button--outline button--waiting" type="button" disabled>Android download coming soon <span>↓</span></button>
                )}
              </div>
              <p className="platform-card__note">iPhone and iPad users can use the web app. An Android APK cannot be installed on iOS.</p>
            </div>
            <div className="platform-visual" aria-hidden="true">
              <div className="platform-visual__orbit platform-visual__orbit--outer" />
              <div className="platform-visual__orbit platform-visual__orbit--inner" />
              <div className="platform-visual__center"><img src="/aasai-talk-logo.jpg" alt="" /></div>
              <span className="platform-visual__tag platform-visual__tag--web"><i /> WEB APP</span>
              <span className="platform-visual__tag platform-visual__tag--android">ANDROID <b>SOON</b></span>
              <span className="platform-visual__spark">✳</span>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="container closing-inner">
            <div><span className="closing-spark">✳</span><p>A good conversation can change the shape of an ordinary day.</p></div>
            <a href={WEB_APP_URL} target="_blank" rel="noreferrer">Make room for a hello <ArrowIcon diagonal /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Brand footer />
            <p>Talk closer. Find your next conversation with Aasai Talk.</p>
          </div>
          <div className="footer-links">
            <div><span>EXPLORE</span><a href="#discover">Discover</a><a href="#how-it-works">How it works</a></div>
            <div><span>GET STARTED</span><a href={WEB_APP_URL} target="_blank" rel="noreferrer">Open web app <ArrowIcon diagonal /></a><a href="#get-started">Android app <small>Coming soon</small></a></div>
            <div><span>INFORMATION</span><a href={`${WEB_APP_URL}settings/policies/privacy`} target="_blank" rel="noreferrer">Privacy policy <ArrowIcon diagonal /></a><a href={`${WEB_APP_URL}settings/policies/terms`} target="_blank" rel="noreferrer">Terms of use <ArrowIcon diagonal /></a></div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {COPYRIGHT_YEAR} Aasai Talk. All rights reserved.</span>
          <span>Made for conversations that bring us closer.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
