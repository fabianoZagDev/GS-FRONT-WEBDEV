//Variáveis
const userIcon = document.getElementById('user-icon');
const overlay = document.getElementById('overlay');
const loginPopup = document.getElementById('login-popup');
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const logoutIcon = document.getElementById('logout-icon');

//Função que chama o pop-up ao ser clicado e depois de confirmado fecha o mesmo
userIcon.addEventListener('click', () => {
    overlay.style.display = 'block';
    loginPopup.style.display = 'block';
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    loginPopup.style.display = 'none';
});

//Função para verificar o Login de maneira básica, sem muita segurança, focado em testar as condições
loginBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "Global Solution" && password === "FIAP2024") {
        alert('Login bem-sucedido!');
        overlay.style.display = 'none';
        loginPopup.style.display = 'none';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
});

//Função para pedir o login assim que abrir o site
document.addEventListener('DOMContentLoaded', function() {
    const hasSeenLoginPopup = localStorage.getItem('hasSeenLoginPopup');

    if (!hasSeenLoginPopup) {
        overlay.style.display = 'block';
        loginPopup.style.display = 'block';
        localStorage.setItem('hasSeenLoginPopup', true);
    }
})

//Função para resetar o login
logoutIcon.addEventListener('click', () => {
    usernameInput.value = '';
    passwordInput.value = '';
    alert('Login resetado!')
})

//Função para animação no scroll
const elements = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

elements.forEach((element) => {
    myObserver.observe(element);
});


