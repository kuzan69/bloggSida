noAccount.addEventListener('click', () => {
  sign.textContent = 'Sign Up';
  yesAccount.style.display = 'inline-block';
  noAccount.style.display = 'none';
  login.style.display = 'none';
  register.style.display = 'block';
});

yesAccount.addEventListener('click', () => {
  sign.textContent = 'Sign In';
  yesAccount.style.display = 'none';
  noAccount.style.display = 'inline-block';
  login.style.display = 'block';
  register.style.display = 'none';
});