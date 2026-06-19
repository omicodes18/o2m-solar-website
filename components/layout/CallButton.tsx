import { COMPANY } from "@/lib/constants";

function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function CallButton() {
  return (
    <a
      href={telHref(COMPANY.phone)}
      className="call-fab"
      aria-label={`Call us at ${COMPANY.phone}`}
    >
      <span className="call-fab-icon" aria-hidden>
        📞
      </span>
      <span className="call-fab-label">Call Us</span>
    </a>
  );
}
