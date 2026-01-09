// script.js - redireciona para dashboard quando clicar em Login
document.addEventListener('DOMContentLoaded', function() {
  var loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      // redireciona para a página com os cartões
      window.location.href = 'dashboard.html';
    });
  }
});
