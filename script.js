const roles = [
    "Data Scientist 📊 ",
    "AI Engineer 🤖 ",
    "NLP Enthusiast 🧠 "
  ];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const span = document.getElementById("animated-text");
    const currentRole = roles[index];

    if (isDeleting) {
      span.textContent = currentRole.substring(0, charIndex--);
    } else {
      span.textContent = currentRole.substring(0, charIndex++);
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // Pause before deleting
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
      typingSpeed = 200; // Pause before typing new word
    }

    setTimeout(typeEffect, typingSpeed);
  }

  document.addEventListener("DOMContentLoaded", typeEffect);


 document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
      let count = 0;
      const updateCount = () => {
        const target = +counter.getAttribute("data-count");
        const increment = target / 100;
        if (count < target) {
          count += increment;
          counter.textContent = Math.ceil(count);
          setTimeout(updateCount, 20);
        } else {
          counter.textContent = target;
        }
      };
      updateCount();
    });
  });
