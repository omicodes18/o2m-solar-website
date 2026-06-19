import { NextRequest, NextResponse } from "next/server";
import {
  insertReviewToDb,
  fetchApprovedReviewsFromDb,
  isSupabaseConfigured,
} from "@/lib/supabase";

/** GET /api/reviews — returns approved reviews */
export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ reviews: [] });
  }

  try {
    const reviews = await fetchApprovedReviewsFromDb();
    return NextResponse.json({ reviews: reviews ?? [] });
  } catch (err) {
    console.error("[GET /api/reviews]", err);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

/** POST /api/reviews — saves a new review (pending moderation) */
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, city, rating, reviewText } = body as Record<string, unknown>;

  // Validate
  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 422 });
  }
  if (typeof city !== "string" || city.trim().length < 2) {
    return NextResponse.json({ error: "Please enter your city." }, { status: 422 });
  }
  if (typeof rating !== "number" || rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Please select a rating from 1 to 5." }, { status: 422 });
  }
  if (typeof reviewText !== "string" || reviewText.trim().length < 10) {
    return NextResponse.json({ error: "Review must be at least 10 characters." }, { status: 422 });
  }

  if (!isSupabaseConfigured()) {
    // No credentials yet — accept locally so the form works during development
    return NextResponse.json({
      ok: true,
      pending: true,
      review: {
        id: `local-${Date.now()}`,
        name: name.trim(),
        city: city.trim(),
        rating,
        reviewText: reviewText.trim(),
        createdAt: new Date().toISOString(),
      },
    });
  }

  try {
    const inserted = await insertReviewToDb({
      name: name.trim(),
      city: city.trim(),
      rating,
      review_text: reviewText.trim(),
    });

    if (!inserted) {
      return NextResponse.json({ error: "Could not save review." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, pending: true, review: inserted });
  } catch (err) {
    console.error("[POST /api/reviews]", err);
    return NextResponse.json({ error: "Could not save review. Please try again later." }, { status: 500 });
  }
}
