/**
 * Supabase integration layer — SERVER ONLY.
 *
 * Client (browser) uses NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY.
 * Server API routes use SUPABASE_SERVICE_ROLE_KEY (never exposed to browser).
 *
 * Set up:
 *   1. Create a project at https://supabase.com
 *   2. Run supabase/schema.sql in the SQL editor
 *   3. Copy .env.local.example → .env.local and fill in your keys
 */

import "server-only";
import { createClient } from "@supabase/supabase-js";
import type { Review } from "./reviews";

export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
} as const;

/** True when the required public env vars are set. */
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

/** Supabase client using the anon key — safe for browser use. */
export function createSupabaseClient() {
  if (!isSupabaseConfigured()) return null;
  return createClient(supabaseConfig.url, supabaseConfig.anonKey);
}

/** Supabase client using the service role key — SERVER ONLY. */
export function createSupabaseServiceClient() {
  if (!supabaseConfig.url || !supabaseConfig.serviceRoleKey) return null;
  return createClient(supabaseConfig.url, supabaseConfig.serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

/** Fetch all approved reviews ordered by newest first. */
export async function fetchApprovedReviewsFromDb(): Promise<Review[] | null> {
  const client = createSupabaseClient();
  if (!client) return null;

  const { data, error } = await client
    .from("reviews")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data as ReviewRow[]).map(rowToReview);
}

/**
 * Insert a new review with approved=false (pending moderation).
 * Called from the server-side API route using the service role key.
 */
export async function insertReviewToDb(
  payload: ReviewInsert
): Promise<Review | null> {
  const client = createSupabaseServiceClient();
  if (!client) return null;

  const { data, error } = await client
    .from("reviews")
    .insert({ ...payload, approved: false })
    .select()
    .single();

  if (error) throw error;
  return rowToReview(data as ReviewRow);
}
