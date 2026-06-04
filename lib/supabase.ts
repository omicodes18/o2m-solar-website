/**
 * Supabase integration layer.
 * Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY when ready.
 * Server writes should use SUPABASE_SERVICE_ROLE_KEY via API routes (not in browser).
 */

import type { Review } from "./reviews";

export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
} as const;

export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseConfig.url && supabaseConfig.anonKey);
}

/** Matches `public.reviews` — see supabase/schema.sql */
export type ReviewRow = {
  id: string;
  name: string;
  city: string;
  rating: number;
  review_text: string;
  created_at: string;
  approved: boolean;
};

export type ReviewInsert = Pick<ReviewRow, "name" | "city" | "rating" | "review_text">;

function rowToReview(row: ReviewRow): Review {
  return {
    id: row.id,
    name: row.name,
    city: row.city,
    rating: row.rating,
    reviewText: row.review_text,
    createdAt: row.created_at,
  };
}

/**
 * Returns a Supabase client when configured.
 * Install `@supabase/supabase-js` and uncomment the implementation when credentials are added.
 */
export async function createSupabaseClient() {
  if (!isSupabaseConfigured()) {
    return null;
  }

  // const { createClient } = await import("@supabase/supabase-js");
  // return createClient(supabaseConfig.url, supabaseConfig.anonKey);
  return null;
}

export async function fetchApprovedReviewsFromDb(): Promise<Review[] | null> {
  const client = await createSupabaseClient();
  if (!client) return null;

  // const { data, error } = await client
  //   .from("reviews")
  //   .select("*")
  //   .eq("approved", true)
  //   .order("created_at", { ascending: false });
  // if (error) throw error;
  // return (data as ReviewRow[]).map(rowToReview);

  return null;
}

export async function insertReviewToDb(
  payload: ReviewInsert
): Promise<Review | null> {
  const client = await createSupabaseClient();
  if (!client) return null;

  // const { data, error } = await client
  //   .from("reviews")
  //   .insert({ ...payload, approved: false })
  //   .select()
  //   .single();
  // if (error) throw error;
  // return rowToReview(data as ReviewRow);

  void payload;
  return null;
}
