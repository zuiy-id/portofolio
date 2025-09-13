//   WELCOM MESSAGE
  function welcomeMessage() {
      let messages = prompt("Masukkan nama Anda:");
      if (messages && messages.trim() !== "") {
          document.getElementById("welcome-message").innerText = messages;
      } else {
          document.getElementById("welcome-message").innerText = "Friend";
      }
          
  }

// INPUT FORM
  function addFormListeners() 
    {
        let form = document.getElementById("form");
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            if(name === "" || email === "" || message === ""){
                return;
            }

            alert(`Terima Kasih, ${name}! Pesan anda sudah terkirim.`);
            form.reset(); 
        });
    }

    window.onload = function() {
        welcomeMessage();
        addFormListeners();
    };

    // Toggle menu di mobile dengan animasi
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("scale-y-100", "opacity-100");
        menu.classList.remove("scale-y-0", "opacity-0");
    } else {
        menu.classList.add("scale-y-0", "opacity-0");
        menu.classList.remove("scale-y-100", "opacity-100");
        setTimeout(() => menu.classList.add("hidden"), 300); // delay sesuai duration-300
    }
});