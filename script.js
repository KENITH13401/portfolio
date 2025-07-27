// ===== Name Typing Animation on Page Load =====
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector('.intro');
  const introText = document.querySelector('.intro-text');
  const name = "Kenith Karas 😊";
  let i = 0;

  introText.textContent = ""; // ✅ clear any existing text

  function typeWriter() {
    if (i < name.length) {
      introText.textContent += name.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // typing speed
    } else {
      // Wait a moment after typing completes, then fade out
      setTimeout(() => {
        intro.style.transition = 'opacity 1s ease';
        intro.style.opacity = 0;
        setTimeout(() => {
          intro.style.display = 'none';
        }, 1000);
      }, 1500);
    }
  }

  typeWriter();
});



// ===== Dark Mode Toggle =====
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.toggle("dark-mode");

  // Save theme preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// ===== Load Theme Preference =====
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// ===== Smooth Scroll for All Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    "A Web Developer.",
    "A Frontend Developer.",
    "A UI Designer."
  ];

  const typedText = document.getElementById("typed-role");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typedText.textContent = currentRole.substring(0, charIndex--);
    } else {
      typedText.textContent = currentRole.substring(0, charIndex++);
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // pause before deleting
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
});



  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active class to clicked
      button.classList.add('active');
      document.getElementById(button.dataset.tab).classList.add('active');
    });
  });


