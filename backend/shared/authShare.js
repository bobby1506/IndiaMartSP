const isEmpty = (field,fieldNa) => {
  field = field?.trim();
  if (!field) {
    return {
      field: fieldName,
      message: `Please enter ${fieldName}`,
    };
  }
  return null;
};

const isValidEmail = (email) => {
  const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegx.test(email);
};

const isValidPassword = (password) => {
  const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegx.test(password);
};

module.exports = { isEmpty, isValidEmail, isValidPassword };
