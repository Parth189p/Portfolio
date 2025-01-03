const createTag = () => {
  if (typeof window === 'undefined') return null; // Check if we're on server side
  
  // Now safely use document
  const tag = document.createElement('script');
  // ...existing code...
  return tag;
};

export default createTag;
