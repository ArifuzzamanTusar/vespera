"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="form-grid"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={submitted}
        />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={submitted}
        />
      </div>

      <div className="field">
        <label htmlFor="phone">Phone (optional)</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          disabled={submitted}
        />
      </div>

      <div className="field">
        <label htmlFor="reason">Reason for contact</label>
        <select id="reason" name="reason" required disabled={submitted}>
          <option value="">Select one</option>
          <option value="order">Personal order</option>
          <option value="wholesale">Wholesale inquiry</option>
          <option value="concierge">Concierge / event service</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your order, event, or wholesale needs."
          disabled={submitted}
        />
      </div>

      {!submitted ? (
        <button type="submit" className="btn btn-solid">
          Send to Private Client
        </button>
      ) : (
        <p
          style={{
            color: "var(--gold-bright)",
            fontFamily: "var(--font-jost)",
            fontSize: "13px",
            letterSpacing: "0.08em",
          }}
        >
          Thank you — a member of Vespera&apos;s Private Client team will be in
          touch shortly.
        </p>
      )}
    </form>
  );
}
