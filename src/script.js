function toggleMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('active');
}

document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
document.querySelector('.close-icon').addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', (event) => {
  // Typewriter Effect
  const textElements = document.getElementById('typewriter-text');
  let characterIndex = 0;
  let textIndex = 0;
  const texts = ["Designer", "Developer", "Software Engineer"];
  const speed = 100;

  function typeWriter() {
      if (textElements && characterIndex < texts[textIndex].length) {
          textElements.innerHTML += texts[textIndex].charAt(characterIndex);
          characterIndex++;
          setTimeout(typeWriter, speed);
      } else {
          setTimeout(eraseText, 1000);
      }
  }

  function eraseText() {
      if (textElements && textElements.innerHTML.length > 0) {
          textElements.innerHTML = textElements.innerHTML.substring(0, textElements.innerHTML.length - 1);
          setTimeout(eraseText, speed);
      } else {
          textIndex = (textIndex + 1) % texts.length;
          characterIndex = 0;
          setTimeout(typeWriter, 1000);
      }
  }

  if (textElements) {
      typeWriter();
  }

  // Menu Toggle
  function toggleMenu() {
      const mobileMenu = document.querySelector('.mobile-menu');
      mobileMenu.classList.toggle('active');
  }

  document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
  document.querySelector('.close-icon').addEventListener('click', toggleMenu);

  // Image Slider
  let currentSlide = 0;

  window.moveSlide = function(n) {  // Define moveSlide in the global scope
      const slides = document.querySelectorAll('.slide');
      const totalSlides = slides.length;
      if (totalSlides > 0) {
          currentSlide = (currentSlide + n + totalSlides) % totalSlides;
          document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100 / totalSlides}%)`;
      }
  }

  document.querySelector('.prev')?.addEventListener('click', () => moveSlide(-1));
  document.querySelector('.next')?.addEventListener('click', () => moveSlide(1));

  document.querySelectorAll('.slide img').forEach(img => {
      img.addEventListener('click', () => {
          document.querySelectorAll('.slide img').forEach(i => i.classList.remove('enlarged'));
          img.classList.add('enlarged');
      });
  });

  // Contact Form Validation
  const form = document.getElementById("contact-form");

  if (form) {
      form.addEventListener("submit", function(event) {
          event.preventDefault(); // Prevent the default form submission

          const nameInput = document.getElementById("nameInput");
          const subjectInput = document.getElementById("messageInput");
          const messageTextArea = document.getElementById("message");

          let hasError = false;

          // Check if name is empty
          if (nameInput && nameInput.value.trim() === "") {
              alert("Please enter your name.");
              hasError = true;
          }

          // Check if subject is empty
          if (subjectInput && subjectInput.value.trim() === "") {
              alert("Please enter the subject.");
              hasError = true;
          }

          // Check if message is empty
          if (messageTextArea && messageTextArea.value.trim() === "") {
              alert("Please enter your message.");
              hasError = true;
          }

          // If no errors, display success message
          if (!hasError) {
              alert("Message sent successfully!");
          }
      });
  }
});