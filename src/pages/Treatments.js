import "./Treatments.css";
import treatmentImg1 from "../assets/images/threatment2.png";
import treatmentImg2 from "../assets/images/threatment2.png";
import treatmentImg3 from "../assets/images/threatment2.png";
import treatmentImg4 from "../assets/images/threatment2.png";

export default function Treatments() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment request submitted. We will contact you soon.");
    // later → call API Gateway endpoint here
  };

  return (
    <div className="treatments-page">
      {/* HERO */}
      <section className="treatments-hero">
        <h1>Ayurvedic Treatments</h1>
        <p>
          Authentic Ayurvedic treatments focused on holistic healing of body,
          mind, and soul.
        </p>
      </section>

      {/* TREATMENT TYPES */}
      <section className="treatment-grid">
        <div className="treatment-card">
          <img src={treatmentImg1} alt="Ayurvedic Treatment1" />
          <h3>Abhyanga - Massage therapy</h3>
          <p>Perfect for- Arthritis and other joint pains, Paralysis, CTS, Sciatica etc.</p>
        </div>

        <div className="treatment-card">
          <img src={treatmentImg2} alt="Ayurvedic Treatment2" />
          <h3>Herbal Steam Therapy - Nadi Swedana , Pottani sweda</h3>
          <p>Perfect for: Joint pain , Stiffness ,Detox ,Skin purification</p>
        </div>

        <div className="treatment-card">
          <img src={treatmentImg3} alt="Ayurvedic Treatment3" />
          <h3>Kati Basti – Healing Warmth for the Spine</h3>
          <p>Perfect for: Back pain, Sciatica, Disc issues, Muscle stiffness</p>
        </div>

        <div className="treatment-card">
          <img src={treatmentImg4} alt="Ayurvedic Treatment4" />
          <h3>Personalized Healing Journey</h3>
          <p>Every individual is unique in Ayurveda. At Ayura Naturals, we assess your Prakriti (body constitution) and Vikriti (imbalance) to design a treatment plan tailored only for you.</p>
        </div>
      </section>

      {/* APPOINTMENT FORM */}
      <section className="appointment-section">
        <h2>Book an Appointment</h2>

        <form className="appointment-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="date" required />

          <select required>
            <option value="">Select Treatment</option>
            <option>Abhyanga - Massage therapy</option>
            <option>Herbal Steam Therapy - Nadi Swedana , Pottani sweda</option>
            <option>Kati Basti – Healing Warmth for the Spine</option>
            <option>Personalized Healing Journey</option>
          </select>

          <textarea placeholder="Additional Notes (optional)" rows="4" />

          <button type="submit">Submit Appointment</button>
        </form>
      </section>
    </div>
  );
}
