const isEmpty = (field,fieldName) => {
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

const isValidMobile=(mobile)=>{
  const mobileRegx=/^[6-9]\d{9}$/;
  return mobileRegx.test(mobile);
}

const isValidPassword = (password) => {
  const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegx.test(password);
};

module.exports = { isEmpty, isValidEmail, isValidPassword,isValidMobile };
