import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [isSending, setIsSending] = useState(false); // Track sending status

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSending) return; // Prevent resending if already in process

    setIsSending(true);

    emailjs
      .sendForm(
        'service_jdjk8jh',   // Replace with your actual Service ID
        'template_quygcj2',  // Replace with your actual Template ID
        form.current,
        'EBLXpPCeZLTVGVEA9'  // Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
          setIsSending(false); // Reset sending state
        },
        (error) => {
          console.log(error.text);
          setIsSending(false); // Reset sending state even if failed
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          {done && <span className="success-text">Thanks! I will reply soon 😊</span>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
