"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // If bot filled out the honeypot field, stop quietly
    if (formData.get("botcheck")) {
      setStatus("success");
      return;
    }

    const payload = {
      access_key: siteConfig.web3formsKey,
      subject: `New Private Client Inquiry: ${formData.get("reason") || "Order Request"}`,
      from_name: "Vespera Caviar Website",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "Not provided",
      reason: formData.get("reason"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
            "Unable to send your inquiry right now. Please try again or email us directly."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "A network error occurred. Please check your connection or contact us directly."
      );
    }
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit} noValidate={false}>
      {/* Web3Forms Honeypot Spam Protection (Hidden from real users) */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="field">
        <label htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          disabled={status === "submitting" || status === "success"}
        />
      </div>

      <div className="field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="your.email@domain.com"
          disabled={status === "submitting" || status === "success"}
        />
      </div>

      <div className="field">
        <label htmlFor="phone">Phone number (optional)</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (212) 000-0000"
          disabled={status === "submitting" || status === "success"}
        />
      </div>

      <div className="field">
        <label htmlFor="reason">Reason for contact</label>
        <select
          id="reason"
          name="reason"
          required
          disabled={status === "submitting" || status === "success"}
          defaultValue=""
        >
          <option value="" disabled>
            Select inquiry type
          </option>
          <option value="Personal order">Personal order</option>
          <option value="Wholesale / Hospitality">Wholesale inquiry</option>
          <option value="Concierge / Event Service">
            Concierge / event service
          </option>
          <option value="Corporate Gifting">Corporate gifting</option>
          <option value="Other">Other inquiry</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your desired selections, guest count, event timeline, or shipping destination."
          disabled={status === "submitting" || status === "success"}
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          style={{
            border: "1px solid rgba(220, 38, 38, 0.4)",
            background: "rgba(220, 38, 38, 0.08)",
            padding: "16px 20px",
            color: "#fca5a5",
            fontSize: "14px",
            fontFamily: "var(--font-jost), sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          {errorMessage}{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            style={{
              color: "var(--gold-bright)",
              textDecoration: "underline",
              fontWeight: 500,
            }}
          >
            {siteConfig.contact.email}
          </a>
        </div>
      )}

      {status !== "success" ? (
        <button
          type="submit"
          className="btn btn-solid"
          disabled={status === "submitting"}
          style={{
            cursor: status === "submitting" ? "not-allowed" : "pointer",
            opacity: status === "submitting" ? 0.75 : 1,
          }}
        >
          {status === "submitting"
            ? "Transmitting to Private Client..."
            : "Send to Private Client"}
        </button>
      ) : (
        <div
          role="status"
          aria-live="polite"
          style={{
            border: "1px solid var(--gold)",
            background: "rgba(201, 162, 39, 0.08)",
            padding: "24px 28px",
            textAlign: "center",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="none"
            stroke="#C9A227"
            strokeWidth="1.8"
            style={{ margin: "0 auto 12px", display: "block" }}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3
            style={{
              color: "var(--cream)",
              fontSize: "20px",
              margin: "0 0 8px",
              fontFamily: "var(--font-playfair)",
            }}
          >
            Inquiry Received
          </h3>
          <p
            style={{
              color: "var(--cream-dim)",
              fontFamily: "var(--font-garamond)",
              fontSize: "16px",
              margin: "0 0 16px",
              lineHeight: 1.5,
            }}
          >
            Thank you. Your inquiry has been routed to Vespera&apos;s Private
            Client desk in New York. A dedicated concierge will review your
            details and respond within one business day.
          </p>
          <button
            type="button"
            className="btn"
            onClick={() => setStatus("idle")}
            style={{ fontSize: "12px", padding: "8px 18px" }}
          >
            Send Another Note
          </button>
        </div>
      )}
    </form>
  );
}
