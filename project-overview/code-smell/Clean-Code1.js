export const promoteToMember = async (registration) => {
  const timestamp = Date.now();
  const isoDate = new Date().toISOString();

  // Define the new profile record
  const profileData = {
    StudName: registration.StudName,
    StudNum: registration.StudNum,
    Email: registration.Email,
    Password: registration.Password,
    Role: 'Member',
    Rating: 1200,
    PuzzlesWin: 0,
    PuzzlesTotal: 0,
    Date: isoDate,
    LastModified: timestamp
  };

  // 1. Create Profile and Roster entry (Independent operations)
  const results = await Promise.all([
    supabase.schema('Chessistant').from('Profiles').insert([profileData]),
    supabase.schema('Chessistant').from('OrgRoster').insert([{
      StudName: registration.StudName,
      StudNum: registration.StudNum,
      LastModified: timestamp
    }])
  ]);

  // Check for errors in the first two steps
  const firstError = results.find(r => r.error)?.error;
  if (firstError) throw firstError;

  // 2. Cleanup Registration (Dependent operation)
  const { error: deleteError } = await supabase
    .schema('Chessistant')
    .from('Registrations')
    .delete()
    .eq('RegID', registration.RegID);

  if (deleteError) throw deleteError;

  return { success: true };
};