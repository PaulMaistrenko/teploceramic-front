export const setToStorage = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

export const getFromStorage = (key) => {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return [];
};