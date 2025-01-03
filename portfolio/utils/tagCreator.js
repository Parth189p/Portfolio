const createTag = () => {
  try {
    if (typeof window === 'undefined') {
      return null;
    }
    
    const tag = document.createElement('script');
    // ...existing code...
    return tag;
  } catch (error) {
    console.error('Error creating tag:', error);
    return null;
  }
};

export default createTag;
