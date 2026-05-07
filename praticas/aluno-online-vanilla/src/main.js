const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const validateField = (input, errorElement, message) => {
  if (input.value.trim() === '') {
    errorElement.textContent = message;
    input.style.borderColor = '#b91c1c';
    return false;
  } else {
    errorElement.textContent = '';
    input.style.borderColor = '#d1d5db';
    return true;
  }
};

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const isEmailValid = validateField(
    emailInput, 
    emailError, 
    'O campo de email é obrigatório.'
  );
  
  const isPasswordValid = validateField(
    passwordInput, 
    passwordError, 
    'O campo de senha é obrigatório.'
  );

  if (isEmailValid && isPasswordValid) {
    // Simulação de sucesso e redirecionamento
    console.log('Login realizado com sucesso!');
    window.location.href = 'index.html'; // Aqui você redirecionaria para a Dashboard
  }
});

// Limpa o erro enquanto o usuário digita
emailInput.addEventListener('input', () => validateField(emailInput, emailError, ''));
passwordInput.addEventListener('input', () => validateField(passwordInput, passwordError, ''));