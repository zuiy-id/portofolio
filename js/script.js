//   WELCOM MESSAGE
  function welcomeMessage() {
      let messages = prompt("Masukkan nama Anda:");
      if (messages && messages.trim() !== "") {
          document.getElementById("welcome-message").innerText = messages;
      } else {
          document.getElementById("welcome-message").innerText = "Guest";
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