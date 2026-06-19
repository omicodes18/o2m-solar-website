/**
 * Client-safe review helpers.
 * - getReviews()   → GET /api/reviews (falls back to mock data)
 * - submitReview() → POST /api/reviews (validated server-side)
 */

export type Review = {
  id: string;
  name: string;
  city: string;
  rating: number;
  reviewText: string;
  createdAt: string;
};

export type ReviewSubmission = {
  name: string;
  city: string;
  rating: number;
  reviewText: string;
};

export type SubmitReviewResult =
  | { ok: true; pending: boolean; review?: Review }
  | { ok: false; error: string };

/** Displayed while Supabase is not yet connected / as fallback. */
export const MOCK_REVIEWS: Review[] = [
  {
    id: "mock-1",
    name: "Amit Sharma",
    city: "Lucknow",
    rating: 5,
    reviewText:
      "Professional rooftop solar installation in Lucknow. Team explained PM Surya Ghar subsidy steps clearly and commissioning was on schedule.",
    createdAt: "2025-11-12T10:00:00.000Z",
  },
  {
    id: "mock-2",
    name: "Priya Verma",
    city: "Gomti Nagar",
    rating: 5,
    reviewText:
      "Best experience with a solar company in Lucknow. Net metering paperwork and UPNEDA coordination were handled end-to-end.",
    createdAt: "2025-10-28T10:00:00.000Z",
  },
  {
    id: "mock-3",
    name: "Rakesh Gupta",
    city: "Kanpur",
    rating: 4,
    reviewText:
      "Commercial solar installation completed with solid engineering drawings. Savings on our factory bill are already visible.",
    createdAt: "2025-10-05T10:00:00.000Z",
  },
  {
    id: "mock-4",
    name: "Sunita Yadav",
    city: "Indira Nagar",
    rating: 5,
    reviewText:
      "Transparent quote on solar panel price with subsidy in UP. Residential rooftop solar works great—highly recommend o2m.",
    createdAt: "2025-09-18T10:00:00.000Z",
  },
];

/** Fetch approved reviews from the API (falls back to mock data on error). */
export async function getReviews(): Promise<Review[]> {
  try {
    const res = await fetch("/api/reviews", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const fromApi: Review[] = json.reviews ?? [];
    // If Supabase is live and has data, use it; else fall through to mock
    if (fromApi.length > 0) return fromApi;
  } catch {
    // Network error or Supabase not configured — fall back silently
  }
  return MOCK_REVIEWS;
}

/** Submit a new review via the secure server-side API route. */
export async function submitReview(
  input: ReviewSubmission
): Promise<SubmitReviewResult> {
  try {
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    const json = await res.json();

    if (!res.ok) {
      return { ok: false, error: json.error ?? "Could not submit review." };
    }

    return { ok: true, pending: json.pending ?? true, review: json.review };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}
