const txtAmin = document.querySelector(".description");

new Typewriter(txtAmin,{
    loop:true,
     deleteSpeed: 30
})
.changeDelay(40)
.typeString('Bienvenue sur mon Porfolio')
.pauseFor(1000)
.deleteChars(26)

.typeString('Je suis Developpeur Web junior!')
.pauseFor(1000)
.deleteChars(11)

.typeString('<span style="color:#1583A5"> mobile</span>!')
.pauseFor(1000)
.deleteChars(7)

.typeString('<span style="color:#1583A5">IOT</span>!')
.pauseFor(1000)
.deleteChars(17)

.typeString('<span style="color:#1583A5"> Infographe</span>!')
.pauseFor(1000)
.deleteChars(6)
.start();


const controlle = document.getElementById('controlle');
const nav = document.getElementById('nav');

controlle.addEventListener('click', function() {
  nav.classList.toggle('active');
  document.querySelector('.fa-bars').style.display = 'none';
  document.querySelector('.fa-xmark').style.display = 'flex';
});

nav.addEventListener('click', function() {
  nav.classList.remove('active');
  document.querySelector('.fa-bars').style.display = 'flex';
  document.querySelector('.fa-xmark').style.display = 'none';
});



