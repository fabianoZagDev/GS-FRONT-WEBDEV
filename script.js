//Variáveis
const userIcon = document.getElementById('user-icon');
const loginMobile = document.getElementById('login-mobile');
const overlay = document.getElementById('overlay');
const loginPopup = document.getElementById('login-popup');
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const logoutIcon = document.getElementById('logout-icon');
const logoutMobile = document.getElementById('logout-mobile');
const elements = document.querySelectorAll('.hidden');
let count1 = 1
let count2 = 1

//Função que chama o pop-up ao ser clicado e depois de confirmado fecha o mesmo
userIcon.addEventListener && loginMobile.addEventListener('click', () => {
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
logoutIcon.addEventListener && logoutMobile.addEventListener('click', () => {
    usernameInput.value = '';
    passwordInput.value = '';
    alert('Login resetado!')
})

//Função para animação no scroll
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

//Carrosel para os slides

document.getElementById("radio1").checked=true;


function nextimage(){
    count1++;
    if(count1>3){
        count1 = 1
    }
    document.getElementById("radio"+count1).checked=true;
}


document.getElementById("radio-1").checked=true;

function nextimage2(){
    count2++;
    if(count2>5){
        count2 = 1
    }
    document.getElementById("radio-"+count2).checked=true;
}
setInterval(function(){
    nextimage();
     nextimage2();
}, 10000)

function menuShow(){
    let menuMobile = document.querySelector('.menuMobile');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open');
    }
}