-- Lead qualification fields for the contact/quote forms.
-- Run this in the Supabase SQL editor (Project > SQL Editor) before deploying
-- the updated forms, otherwise submissions from the new fields will fail to save.

alter table contact_submissions
  add column if not exists suburb text,
  add column if not exists budget_band text,
  add column if not exists preferred_start_date date,
  add column if not exists popia_consent boolean,
  add column if not exists photo_path text;

-- Private bucket for optional property/project photos attached to a lead.
-- Photos are not public; the admin dashboard reads them via a signed URL.
insert into storage.buckets (id, name, public)
values ('lead-uploads', 'lead-uploads', false)
on conflict (id) do nothing;

-- Matches the existing pattern where the anon key (used server-side by
-- /api/contact) can write new submissions, and only a logged-in admin can
-- read them back. Check these against your existing contact_submissions
-- policies and adjust role names if they differ.
create policy "Anon can upload lead photos"
  on storage.objects for insert
  to anon
  with check (bucket_id = 'lead-uploads');

create policy "Authenticated can read lead photos"
  on storage.objects for select
  to authenticated
  using (bucket_id = 'lead-uploads');
