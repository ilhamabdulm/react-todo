export const storeStorageData = (key, data) => {
  const serialize = JSON.stringify(data);
  localStorage.setItem(key, serialize);
};

export const getStorageData = (key) => {
  const serialize = localStorage.getItem(key);
  return JSON.parse(serialize) || null;
};
