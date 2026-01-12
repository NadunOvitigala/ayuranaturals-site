import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We are here to guide you on your natural healing journey.  
          Feel free to reach out to us for treatments, products, or inquiries.
        </p>
      </section>

      <section className="contact-container">
        {/* CONTACT DETAILS */}
        <div className="contact-info">
          <h2>Ayura Naturals</h2>

          <p>
            <strong>Ayurvedic Medical Center</strong>
          </p>

          <p>
            📍 Sri Lanka
          </p>

          <p>
            📞 <strong>Phone / WhatsApp:</strong><br />
            <a href="https://wa.me/94712137626" target="_blank" rel="noreferrer">
              +94 71 213 7626
            </a>
          </p>

          <p>
            📧 <strong>Email:</strong><br />
            <a href="mailto:nadunovitigala@gmail.com">
              nadunovitigala@gmail.com
            </a>
          </p>

          <p className="contact-note">
            Available for consultations, treatments, and product inquiries.
          </p>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <textarea placeholder="Your Message" rows="5" required />

            <button type="submit">Send Message</button>
          </form>

          <p className="form-note">
            * Your message will be sent to our email.
          </p>
        </div>
      </section>
    </div>
  );
}
