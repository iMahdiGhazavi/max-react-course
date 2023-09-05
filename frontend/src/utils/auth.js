export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const loader = () => {
  return getAuthToken();
};
