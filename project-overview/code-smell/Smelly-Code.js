  const handleAccept = async (reg) => {
    try {
      // 1. Insert into Profiles
      const { error: profileError } = await supabase
        .schema('Chessistant')
        .from('Profiles')
        .insert([{
          StudName: reg.StudName,
          StudNum: reg.StudNum,
          Email: reg.Email,
          Password: reg.Password,
          Role: 'Member',
          Rating: 1200, 
          PuzzlesWin: 0,
          PuzzlesTotal: 0,
          Date: new Date().toISOString(),
          LastModified: Date.now()
        }]);

      if (profileError) throw profileError;

      // 2. Insert into OrgRoster
      const { error: rosterError } = await supabase
        .schema('Chessistant')
        .from('OrgRoster')
        .insert([{
          StudName: reg.StudName,
          StudNum: reg.StudNum,
          LastModified: Date.now()
        }]);

      if (rosterError) throw rosterError;

      // 3. Delete from Registrations
      const { error: deleteError } = await supabase
        .schema('Chessistant')
        .from('Registrations')
        .delete()
        .eq('RegID', reg.RegID);

      if (deleteError) throw deleteError;

      fetchRegistrations();
      alert('Application Accepted and Profile Created.');
    } catch (err) {
      console.error('Error accepting registration:', err.message);
      alert('Action failed: ' + (err.message || 'Unknown error'));
    }
  };