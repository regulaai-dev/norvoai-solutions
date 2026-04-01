-- Creaza tabela pentru lista de asteptare
create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  created_at timestamp with time zone default timezone('utc', now())
);

-- Activeaza Row Level Security
alter table waitlist enable row level security;

-- Permite INSERT public (formular fara autentificare)
create policy "Allow public insert"
  on waitlist
  for insert
  to anon
  with check (true);

-- Permite doar adminii (autentificati) sa vada emailurile
create policy "Allow authenticated select"
  on waitlist
  for select
  to authenticated
  using (true);
