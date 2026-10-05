import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="container section narrow">
      <h1>Contact us</h1>
      <p>+254 700 000 000 · hello@pranavcandies.co.ke</p>
      {sent ? (
        <p className="success">Thanks! We'll get back to you soon ✓</p>
      ) : (
        <form className="card checkout" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <input required placeholder="Your name" />
          <input required type="email" placeholder="Email" />
          <textarea required rows={5} placeholder="Your message" />
          <button className="btn" type="submit">Send message</button>
        </form>
      )}
    </div>
  );
}