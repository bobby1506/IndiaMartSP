const key = "authToken";

export const setToken = (token) => {
  return localStorage.setItem(key, token);
};

export const getToken = () => {
  const k = localStorage.getItem(key);
  // console.log(k, "key");
  return k;
};

export const clearToken = () => {
  return localStorage.removeItem(key);
};
