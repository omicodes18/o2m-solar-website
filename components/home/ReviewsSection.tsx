"use client";

import { useEffect, useState } from "react";
import {
  getReviews,
  submitReview,
  type Review,
  type ReviewSubmission,
} from "@/lib/reviews";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="review-stars" role="group" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          className={`review-star ${n <= value ? "review-star--on" : ""}`}
          onClick={() => onChange(n)}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          aria-pressed={n <= value}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="review-card glass-card">
      <div className="review-card-header">
        <div>
          <p className="review-name">{review.name}</p>
          <p className="review-city">{review.city}</p>
        </div>
        <p className="review-rating" aria-label={`${review.rating} out of 5 stars`}>
          {"★".repeat(review.rating)}
          <span className="sr-only">{review.rating} out of 5</span>
        </p>
      </div>
      <p className="review-text">{review.reviewText}</p>
    </article>
  );
}

export function ReviewsSection() {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getReviews().then((data) => {
      setReviews(data);
      setLoading(false);
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const payload: ReviewSubmission = { name, city, rating, reviewText };
    const result = await submitReview(payload);

    if (!result.ok) {
      setStatus("error");
      setMessage(result.error);
      return;
    }

    setStatus("success");
    setMessage("Thank you! Your review is pending approval and will appear shortly.");

    setName("");
    setCity("");
    setRating(5);
    setReviewText("");
  }

  return (
    <section
      id="reviews"
      ref={ref}
      className={`section section--reviews scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}
      aria-labelledby="reviews-title"
    >
      <div className="section-inner">
        <h2 id="reviews-title" className="section-title">
          Customer Reviews
        </h2>
        <p className="section-subtitle">
          Share your experience with our solar EPC team in Lucknow and Uttar Pradesh
        </p>

        <form className="review-form glass-card" onSubmit={handleSubmit} noValidate>
          <h3 className="review-form-title">Submit a review</h3>
          <div className="review-form-grid">
            <label className="calc-label">
              Name
              <input
                className="calc-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                placeholder="Your name"
              />
            </label>
            <label className="calc-label">
              City
              <input
                className="calc-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                autoComplete="address-level2"
                placeholder="Your city"
              />
            </label>
          </div>
          <div>
            <span className="calc-label">Rating</span>
            <StarPicker value={rating} onChange={setRating} />
          </div>
          <label className="calc-label">
            Your Review
            <textarea
              className="calc-input contact-textarea"
              rows={3}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
              minLength={10}
              placeholder="Tell us about your experience…"
            />
          </label>
          <button
            type="submit"
            className="contact-submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Submitting…" : "Submit Review"}
          </button>
          {status !== "idle" && status !== "submitting" && (
            <p
              className={`review-form-status ${status === "error" ? "review-form-status--error" : ""}`}
              role="status"
            >
              {message}
            </p>
          )}
        </form>

        <div className="reviews-list" aria-live="polite">
          {loading ? (
            <p className="reviews-loading">Loading reviews…</p>
          ) : (
            reviews.map((review) => <ReviewCard key={review.id} review={review} />)
          )}
        </div>
      </div>
    </section>
  );
}
