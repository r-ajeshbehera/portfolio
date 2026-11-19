-- Run once in the Supabase SQL editor. Visitors can add messages but cannot read them.
create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  service text not null,
  details text not null
);
alter table public.contact_messages enable row level security;
drop policy if exists "Anyone can send a message" on public.contact_messages;
create policy "Anyone can send a message" on public.contact_messages for insert to anon with check (true);
