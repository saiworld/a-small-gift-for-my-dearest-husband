document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");

  window.setTimeout(() => {
    loader?.classList.add("hide");
  }, 700);

  // Mobile navigation
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  menuBtn?.addEventListener("click", () => nav?.classList.toggle("open"));

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => nav?.classList.remove("open"));
  });

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // Birthday countdown
  const countdown = document.querySelector(".countdown");
  if (countdown) {
    const target = new Date(countdown.dataset.date).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const diff = target - now;

      const days = countdown.querySelector("[data-days]");
      const hours = countdown.querySelector("[data-hours]");
      const minutes = countdown.querySelector("[data-minutes]");
      const seconds = countdown.querySelector("[data-seconds]");

      if (diff <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        return;
      }

      days.textContent = String(Math.floor(diff / 86400000)).padStart(2, "0");
      hours.textContent = String((Math.floor(diff / 3600000) % 24)).padStart(2, "0");
      minutes.textContent = String((Math.floor(diff / 60000) % 60)).padStart(2, "0");
      seconds.textContent = String((Math.floor(diff / 1000) % 60)).padStart(2, "0");
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Smooth navigation helper
  window.scrollToStory = () => {
    document.querySelector("#love")?.scrollIntoView({ behavior: "smooth" });
  };

  // Small floating hearts on birthday page
  if (document.querySelector(".birthday-hero")) {
    const container = document.querySelector(".confetti");
    for (let i = 0; i < 24; i++) {
      const heart = document.createElement("span");
      heart.textContent = Math.random() > 0.35 ? "♥" : "✦";
      heart.style.position = "absolute";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = `${Math.random() * 100}%`;
      heart.style.color = Math.random() > 0.5 ? "rgba(242,183,202,.35)" : "rgba(217,180,122,.25)";
      heart.style.fontSize = `${10 + Math.random() * 18}px`;
      heart.style.animation = `floatHeart ${5 + Math.random() * 8}s ease-in-out ${Math.random() * 4}s infinite`;
      container.appendChild(heart);
    }

    const style = document.createElement("style");
    style.textContent = `
      @keyframes floatHeart {
        0%,100% { transform: translateY(0) rotate(0deg); opacity:.15; }
        50% { transform: translateY(-35px) rotate(12deg); opacity:.75; }
      }
    `;
    document.head.appendChild(style);
  }
});

// =====================================================
// HIS AGE TIMER
// =====================================================

const birthDate = new Date("2004-08-14T10:30:00+05:30");

function updateAge() {

  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();

  const birthdayThisYear = new Date(
    now.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate(),
    birthDate.getHours(),
    birthDate.getMinutes(),
    birthDate.getSeconds()
  );

  if (now < birthdayThisYear) {
    years--;
  }

  const lastBirthday = new Date(
    birthDate.getFullYear() + years,
    birthDate.getMonth(),
    birthDate.getDate(),
    birthDate.getHours(),
    birthDate.getMinutes(),
    birthDate.getSeconds()
  );

  const difference = now - lastBirthday;

  const days = Math.floor(
    difference / 86400000
  );

  const hours = Math.floor(
    (difference / 3600000) % 24
  );

  const minutes = Math.floor(
    (difference / 60000) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  const ageYears = document.getElementById("age-years");
  const ageDays = document.getElementById("age-days");
  const ageHours = document.getElementById("age-hours");
  const ageMinutes = document.getElementById("age-minutes");
  const ageSeconds = document.getElementById("age-seconds");

  if (ageYears) {
    ageYears.textContent =
      String(years).padStart(2, "0");
  }

  if (ageDays) {
    ageDays.textContent =
      String(days).padStart(3, "0");
  }

  if (ageHours) {
    ageHours.textContent =
      String(hours).padStart(2, "0");
  }

  if (ageMinutes) {
    ageMinutes.textContent =
      String(minutes).padStart(2, "0");
  }

  if (ageSeconds) {
    ageSeconds.textContent =
      String(seconds).padStart(2, "0");
  }
}

updateAge();
setInterval(updateAge, 1000);


// =====================================================
// OUR LOVE JOURNEY TIMER
// July 06, 2024 — 11:48 PM IST
// =====================================================

const journeyStart =
  new Date("2024-07-06T23:48:00+05:30");

function updateJourneyTimer() {

  const now = new Date();

  let years =
    now.getFullYear() -
    journeyStart.getFullYear();

  let anniversary = new Date(
    journeyStart.getFullYear() + years,
    journeyStart.getMonth(),
    journeyStart.getDate(),
    journeyStart.getHours(),
    journeyStart.getMinutes(),
    journeyStart.getSeconds()
  );

  if (now < anniversary) {
    years--;

    anniversary = new Date(
      journeyStart.getFullYear() + years,
      journeyStart.getMonth(),
      journeyStart.getDate(),
      journeyStart.getHours(),
      journeyStart.getMinutes(),
      journeyStart.getSeconds()
    );
  }

  const difference = now - anniversary;

  const days = Math.floor(
    difference / 86400000
  );

  const hours = Math.floor(
    (difference / 3600000) % 24
  );

  const minutes = Math.floor(
    (difference / 60000) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  const journeyYears =
    document.getElementById("journey-years");

  const journeyDays =
    document.getElementById("journey-days");

  const journeyHours =
    document.getElementById("journey-hours");

  const journeyMinutes =
    document.getElementById("journey-minutes");

  const journeySeconds =
    document.getElementById("journey-seconds");


  if (journeyYears) {
    journeyYears.textContent =
      String(years).padStart(2, "0");
  }

  if (journeyDays) {
    journeyDays.textContent =
      String(days).padStart(3, "0");
  }

  if (journeyHours) {
    journeyHours.textContent =
      String(hours).padStart(2, "0");
  }

  if (journeyMinutes) {
    journeyMinutes.textContent =
      String(minutes).padStart(2, "0");
  }

  if (journeySeconds) {
    journeySeconds.textContent =
      String(seconds).padStart(2, "0");
  }
}

updateJourneyTimer();
setInterval(updateJourneyTimer, 1000);