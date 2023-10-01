import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import About from "../components/about";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        {/* main header */}
        <header>
          <div className="welcome-text">
            <h1 className="mb-2 lh-1 text-white">DIGITAL INNOVATION</h1>
            <p className="mt-4 fs-5 fw-medium text-white">
              Realize Your Innovation With Us!
            </p>
            <button
              type="button"
              className="btn btn-light fs-5 fw-medium ps-5 pe-5 mt-2 text-info"
            >
              Join Now
            </button>
          </div>
        </header>
        {/* end of main header */}
        <Contact />
        <About />
      </main>
      <Footer />
    </>
  );
}
