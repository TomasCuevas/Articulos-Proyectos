export const getEnvironments = () => {
  return {
    name: import.meta.env.VITE_NAME,
    lastname: import.meta.env.VITE_LASTNAME,
    secret_password: import.meta.env.SECRET_PASSWORD,
  };
};
