const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  let menu = document.querySelector(".menu");
  let nums = document.querySelectorAll(".num");
  let start = false;
  
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
  
    navbar.classList.toggle("sticky", window.scrollY > 0);
  
    if (window.scrollY >= menu.offsetTop) {
      if (!start) {
        nums.forEach((num) => {
          startCount(num);
        });
      }
      start = true;
    }
  });
  
  const startCount = (el) => {
    let max = el.dataset.val;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent === max) {
        clearInterval(count);
      }
    }, 2000 / nums);
  };
  
  const appointmentBtn = document.getElementById("appointmentBtn");
appointmentBtn.addEventListener("click", handleAppointment);

function handleAppointment() {
  // Validate the form fields before scheduling the appointment
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!firstName || !lastName || !email || !phone || !message) {
    alert("Please fill in all the required fields.");
    return;
  }

  const isConfirmed = confirm("Do you want to schedule an appointment?");

  if (isConfirmed) {
    const confirmationMessage = document.createElement("div");
    confirmationMessage.classList.add("confirmation-message");
    confirmationMessage.textContent = "Appointment scheduled successfully!";
    document.body.appendChild(confirmationMessage);

    setTimeout(() => {
      confirmationMessage.style.opacity = "0";
      setTimeout(() => {
        confirmationMessage.remove();
      }, 1000); // Remove the message from the DOM after fading out
    }, 3000); // Hide the message after 3 seconds
  }
}
