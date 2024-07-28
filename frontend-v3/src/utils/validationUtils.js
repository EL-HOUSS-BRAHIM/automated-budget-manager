export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateName = (name) => {
  return name.trim().length > 0;
};

export const validateAmount = (amount) => {
  return !isNaN(parseFloat(amount)) && isFinite(amount) && parseFloat(amount) > 0;
};

export const validateDate = (date) => {
  return !isNaN(Date.parse(date));
};