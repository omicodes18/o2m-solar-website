-- Reviews table for o2m Technical Solutions
-- Run in Supabase SQL editor after creating a project.

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) >= 2),
  city text not null check (char_length(trim(city)) >= 2),
  rating smallint not null check (rating >= 1 and rating <= 5),
  review_text text not null check (char_length(trim(review_text)) >= 10),
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists reviews_approved_created_idx
  on public.reviews (approved, created_at desc);

alter table public.reviews enable row level security;

-- Public read: approved reviews only
create policy "Public read approved reviews"
  on public.reviews for select
  using (approved = true);

-- Public insert: pending moderation (anon key)
create policy "Public insert reviews"
  on public.reviews for insert
  with check (approved = false);

-- Service role approves via dashboard or admin API
