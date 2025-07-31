let darkmode = document.querySelector("#dark");
darkmode.onclick = () => {
  darkmode.classList.toggle("bi-cloud-sun");
  document.body.classList.toggle("sunshine");
};

const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  links.forEach((link) => {
    const sectionId = link.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});
