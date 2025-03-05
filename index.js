document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".style_question__k1wiV");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

      document.querySelectorAll(".style_answer__MF7Np").forEach((ans) => {
        ans.style.maxHeight = "0px";
        ans.style.overflow = "hidden";
        ans.style.transition = "max-height 0.3s ease-out";
      });

      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.overflow = "visible";
      }
    });
  });
});

document.addEventListener("scroll", function () {
  const header = document.querySelector("#headerContainer");

  if (window.scrollY > 100) {
    header.style.background = "white";
  } else {
    header.style.background = "transparent";
  }
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Get input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Format email body
    let mailtoLink = `mailto:mannurkarswapnil@gmail.com?subject=Contact Form Submission&body=
      Name: ${name}%0D%0A
      Email: ${email}%0D%0A
      Phone: ${phone}%0D%0A
      Message: ${message}`;

    window.location.href = mailtoLink;

    // Clear form fields after submission
    document.getElementById("contactForm").reset();
    alert("Successfully sent the contact query to Vaktra!");
  });
