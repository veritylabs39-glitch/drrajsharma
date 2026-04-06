// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


// ================= STICKY NAVBAR =================
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.width = "100%";
        nav.style.zIndex = "1000";
    } else {
        nav.style.position = "relative";
    }
});


// ================= ACTIVE NAV LINK =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ================= SCROLL ANIMATION =================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ================= FORM VALIDATION =================
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    const name = form.querySelector("input[type='text']").value;
    const phone = form.querySelector("input[type='tel']").value;

    if (name.length < 3) {
        alert("Please enter a valid name");
        e.preventDefault();
        return;
    }

    if (phone.length < 10) {
        alert("Please enter a valid phone number");
        e.preventDefault();
        return;
    }

});


// ================= WHATSAPP BUTTON =================
const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/919971875514";
whatsappBtn.target = "_blank";
whatsappBtn.innerHTML = "💬";

Object.assign(whatsappBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    padding: "15px",
    borderRadius: "50%",
    fontSize: "22px",
    textDecoration: "none",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "0.3s"
});

whatsappBtn.onmouseenter = () => whatsappBtn.style.transform = "scale(1.1)";
whatsappBtn.onmouseleave = () => whatsappBtn.style.transform = "scale(1)";

document.body.appendChild(whatsappBtn);


// ================= SCROLL TO TOP BUTTON =================
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";

Object.assign(topBtn.style, {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    padding: "10px 15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    background: "#0d6efd",
    color: "white",
    cursor: "pointer",
    display: "none"
});

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  let start = 0;
  const end = counter.innerText;

  const update = () => {
    start += end / 100;
    if (start < end) {
      counter.innerText = Math.floor(start);
      requestAnimationFrame(update);
    } else {
      counter.innerText = end;
    }
  };

  update();
});