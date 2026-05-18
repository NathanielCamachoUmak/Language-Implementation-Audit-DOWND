     try {
       const { data, error } = await ...;
       if (error) throw error;
     } catch (error) {
       errorMessage.textContent = error.message;
     }