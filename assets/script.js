// responsive mobile menu toggle
const hamburger = document.querySelector(".hamburger"); //storing the hamburger
const navLinks = document.querySelector(".nav-links"); //storing the links to each section

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  //when the icon is clicked, the nav menu becomes visible or hidden
});

// clicking this button will scroll to the top of the page
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    //the button will display after the user has scrolled 150px vertically, and disappear if not
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});
//once the button is cclicked, it will automatically scroll to the top of the page in a smooth amnner
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//sending email and verifying status of the email request
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
    () => {
      alert("Message sent successfully!");
      this.reset();
    },
    (error) => {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    }
  );
});
