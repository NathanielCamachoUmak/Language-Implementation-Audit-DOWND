     try {
       const { data: { session } } = await supabase.auth.getSession();
       if (!session) { ... }
     } catch (err) { ... }