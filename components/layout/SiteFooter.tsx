import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { SEO_COPY } from "@/lib/seo";

function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function SiteFooter() {
  const areas = COMPANY.serviceAreas.join(" · ");

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="section-inner">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">{COMPANY.name}</p>
            <p className="footer-seo">{SEO_COPY.footer}</p>
          </div>
          <div>
            <p className="footer-heading">Service areas</p>
            <p className="footer-areas">{areas}</p>
            <p className="footer-areas-note">
              Rooftop solar installation in Lucknow including Gomti Nagar, Indira Nagar,
              Hazratganj, and Aliganj—plus Kanpur, Varanasi, Prayagraj, Ayodhya, and Barabanki.
            </p>
          </div>
          <div>
            <p className="footer-heading">Contact</p>
            <ul className="footer-contact">
              <li>
                <a href={telHref(COMPANY.phone)}>{COMPANY.phone}</a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li>{COMPANY.hours}</li>
            </ul>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <Link href="/#services">Services</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#reviews">Reviews</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/#calculator">Solar Calculator</Link>
        </nav>

        <p className="footer-copy">
          © {new Date().getFullYear()} {COMPANY.name}. Solar EPC contractor — residential rooftop
          solar, commercial solar installation &amp; industrial solar EPC in Uttar Pradesh.
        </p>
      </div>
    </footer>
  );
}
