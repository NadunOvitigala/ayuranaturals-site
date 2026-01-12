import "./About.css";
import logo from "../assets/images/logo.png";

export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <img src={logo} alt="Ayura Naturals Logo" />
        <h1>About Ayura Naturals</h1>
        <p>Rooted in Ayurveda. Guided by Nature. Dedicated to Healing.</p>
      </section>

      {/* CONTENT */}
      <section className="about-content">
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            Ayura Naturals is an authentic Ayurvedic Medical Center and natural
            wellness brand dedicated to holistic healing through time-tested
            Ayurvedic principles. We focus on restoring balance to the body,
            mind, and soul using nature’s wisdom.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Philosophy</h2>
          <p>
            Ayurveda teaches that true health comes from balance. At Ayura
            Naturals, we treat the root cause of illness rather than symptoms.
            Each treatment is personalized based on individual body constitution
            (Prakriti) and current imbalance (Vikriti).
          </p>
        </div>

        <div className="about-card">
          <h2>Our Treatments</h2>
          <p>
            We offer traditional Ayurvedic therapies such as Abhyanga massage,
            Herbal Steam Therapy, Kati Basti, and personalized treatment plans.
            These therapies support joint health, detoxification, pain relief,
            and overall rejuvenation.
          </p>
        </div>

        <div className="about-card">
          <h2>Natural Products</h2>
          <p>
            Our herbal products, including Keshvardhini Hair Growth Oil and
            Face & Body Soap, are made using 100% natural ingredients and
            traditional preparation methods to ensure purity, safety, and
            effectiveness.
          </p>
        </div>
      </section>
    </div>
  );
}
