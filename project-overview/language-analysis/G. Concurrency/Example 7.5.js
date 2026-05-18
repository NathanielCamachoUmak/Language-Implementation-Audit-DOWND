     const { error: profileError } = await supabase.schema('Chessistant').from('Profiles').insert([...]);
     if (profileError) throw profileError;
     const { error: rosterError } = await supabase.schema('Chessistant').from('OrgRoster').insert([...]);