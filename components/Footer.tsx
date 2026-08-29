import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <Image
                src="/images/vespera-logo.png"
                alt="Vespera Caviar"
                width={28}
                height={28}
                style={{ width: 28, height: 28, objectFit: "contain" }}
              />
              <h4 style={{ margin: 0 }}>Vespera Caviar</h4>
            </div>
            <p>
              Exceptional caviar, shipped from New York. Sustainably sourced,
              malossol, never frozen.
            </p>
            <div className="badge" style={{ marginTop: "14px" }}>
              Ships from New York
            </div>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <Link href="/shop">Collection</Link>
            <Link href="/siberian">Siberian Sturgeon Classic</Link>
            <Link href="/kaluga">Kaluga Fusion Reserve</Link>
            <Link href="/imperial">Imperial Kaluga Fusion</Link>
          </div>

          <div className="footer-col">
            <h4>House</h4>
            <Link href="/about">About</Link>
            <Link href="/shipping">Shipping &amp; Care</Link>
            <Link href="/contact">Private Client</Link>
          </div>

          <div className="footer-col">
            <h4>Bespoke Services</h4>
            <Link href="/contact">Private Dining &amp; Events</Link>
            <Link href="/contact">Corporate Gifting Desk</Link>
            <Link href="/contact">Sommelier Consultations</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 Vespera Caviar. All rights reserved.</span>
          <span className="badge">Ships from New York</span>
        </div>
      </div>
    </footer>
  );
}
