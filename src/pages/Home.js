import "./Home.css";
import logo from "../assets/images/logo.png";
import heroBg from "../assets/images/soap.jpg"; // your lotus/soap image

export default function Home() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(
          rgba(255,255,255,0.85),
          rgba(255,255,255,0.85)
        ), url(${heroBg})`,
      }}
    >
      <div className="hero-content">
        <img src={logo} alt="Ayura Naturals Logo" className="hero-logo" />

        <h1>Ayura Naturals</h1>

        <p className="hero-subtitle">
          Authentic Ayurvedic Medical Center & Natural Products
        </p>

        <div className="hero-actions">
          <a href="/treatments" className="btn btn-primary">
            Book Treatment
          </a>

          <a href="/products" className="btn btn-outline">
            View Products
          </a>
        </div>
      </div>
    </section>
  );
}
