import { NextResponse } from "next/server";
import { createSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

export const dynamic = "force-dynamic";

async function runHealthCheck() {
  const start = Date.now();
  console.log("[health] Starting keep-alive health check...");

  if (!isSupabaseConfigured()) {
    console.error("[health] Supabase is not configured in environment variables.");
    return NextResponse.json(
      { status: "error", message: "Supabase configuration missing" },
      { status: 500 }
    );
  }

  try {
    const supabase = createSupabaseClient();
    if (!supabase) {
      throw new Error("Failed to initialize Supabase client");
    }

    // Perform a lightweight query: select 'id' limit 1 from the reviews table.
    // Using maybeSingle() so it behaves correctly even if the reviews table is empty.
    const { data, error } = await supabase
      .from("reviews")
      .select("id")
      .limit(1)
      .maybeSingle();

    if (error) {
      throw error;
    }

    const duration = Date.now() - start;
    console.log(`[health] Supabase query executed successfully in ${duration}ms. Data found:`, !!data);

    return NextResponse.json(
      { status: "healthy", timestamp: new Date().toISOString(), durationMs: duration },
      { status: 200 }
    );
  } catch (error: any) {
    const duration = Date.now() - start;
    console.error(`[health] Supabase query failed in ${duration}ms:`, error);
    return NextResponse.json(
      { status: "error", message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return runHealthCheck();
}

export async function HEAD() {
  const response = await runHealthCheck();
  // HEAD requests must return headers and status, but NO body.
  // We use new Response(null) to ensure no body is sent.
  return new Response(null, {
    status: response.status,
    headers: response.headers,
  });
}
