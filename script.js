document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêcher le comportement par défaut du formulaire

  // Récupérer les valeurs des champs
  let nom = document.getElementById('nom').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  // Validation simple côté client
  if (nom === '' || email === '' || message === '') {
    alert('Veuillez remplir tous les champs obligatoires.');
    return;
  }

  // Construction du lien "mailto"
  let destinataire = 'stevensinpra@gmail.com';
  let sujet = 'Nouveau message de ' + nom;
  let corps = 'Email: ' + email + '\n\nMessage:\n' + message;
  let mailtoLink = 'mailto:' + destinataire + '?subject=' + encodeURIComponent(sujet) + '&body=' + encodeURIComponent(corps);

  // Ouvrir le client de messagerie par défaut avec le lien mailto
  window.location.href = mailtoLink;

// Réinitialiser le formulaire après l'envoi du message
document.getElementById('contactForm').reset();
});

//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});


//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}
