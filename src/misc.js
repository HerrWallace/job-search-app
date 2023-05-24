export const getStorage = () => {
  return JSON.parse(localStorage.getItem('favourites') || '[]');
};
