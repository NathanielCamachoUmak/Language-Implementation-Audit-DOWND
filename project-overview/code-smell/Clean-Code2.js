  const handleAccept = async (reg) => {
    try {
      await promoteToMember(reg);
      fetchRegistrations();
      alert('Application Accepted: Member profile and roster entries created.');
    } catch (err) {
      console.error('Promotion Failed:', err);
      alert(`Action failed: ${err.message}`);
    }
  };