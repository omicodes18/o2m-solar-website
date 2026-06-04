import {
  fetchApprovedReviewsFromDb,
  insertReviewToDb,
  isSupabaseConfigured,
} from "./supabase";

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

/** Client-safe: returns mock data until Supabase is wired */
export async function getReviews(): Promise<Review[]> {
  if (isSupabaseConfigured()) {
    try {
      const fromDb = await fetchApprovedReviewsFromDb();
      if (fromDb && fromDb.length > 0) return fromDb;
    } catch {
      // fall through to mock
    }
  }
  return MOCK_REVIEWS;
}

export type SubmitReviewResult =
  | { ok: true; pending: boolean; review?: Review }
  | { ok: false; error: string };

export async function submitReview(
  input: ReviewSubmission
): Promise<SubmitReviewResult> {
  const name = input.name.trim();
  const city = input.city.trim();
  const reviewText = input.reviewText.trim();

  if (name.length < 2) return { ok: false, error: "Please enter your name." };
  if (city.length < 2) return { ok: false, error: "Please enter your city." };
  if (input.rating < 1 || input.rating > 5) {
    return { ok: false, error: "Please select a rating from 1 to 5." };
  }
  if (reviewText.length < 10) {
    return { ok: false, error: "Review must be at least 10 characters." };
  }

  if (isSupabaseConfigured()) {
    try {
      const inserted = await insertReviewToDb({
        name,
        city,
        rating: input.rating,
        review_text: reviewText,
      });
      if (inserted) {
        return { ok: true, pending: true, review: inserted };
      }
    } catch {
      return { ok: false, error: "Could not save review. Please try again later." };
    }
  }

  // Mock mode: accept locally (not persisted)
  return {
    ok: true,
    pending: true,
    review: {
      id: `local-${Date.now()}`,
      name,
      city,
      rating: input.rating,
      reviewText,
      createdAt: new Date().toISOString(),
    },
  };
}
