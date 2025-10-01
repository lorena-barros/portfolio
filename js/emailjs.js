(function(){
    emailjs.init({
      publicKey: "HZhRGhyuoahFQe9b4",
    });
 })();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    
    const form = event.target;
    if (!form) {
        console.error("Formulário não encontrado! Verifique o ID do formulário.");
        return;
    }

    const fromName = document.getElementById("from_name").value;
    const toName = document.getElementById("to_name").value;
    const message = document.getElementById("message").value;
    const replyTo = document.getElementById("reply_to").value;

    const statusDiv = document.getElementById("form-status");
    if (!statusDiv) {
      console.error("Elemento 'form-status' não encontrado! Verifique o HTML.");
      return;
    }

    statusDiv.innerHTML = ""; 
    statusDiv.style.display = "none"; 

    
    emailjs.send("service_ljoca35", "template_ewb108n", {
      from_name: fromName,
      to_name: toName,
      message: message,
      reply_to: replyTo
    }).then(function(response) {
        // console.log("Elemento statusDiv:", statusDiv);

        setTimeout(() => {
            statusDiv.style.display = "block";
            statusDiv.innerHTML =
              '<div style="color: green; padding: 10px; border: 1px solid green; border-radius: 5px;">Email enviado com sucesso!</div>';

            setTimeout(() => {
              statusDiv.style.display = "none";
              statusDiv.innerHTML = "";
            }, 2000);
          }, 100);


      form.reset();
    }, function(error) {

        // Exibe a mensagem de erro
        setTimeout(() => {
            statusDiv.style.display = "block";
            statusDiv.innerHTML =
              '<div style="color: red; padding: 10px; border: 1px solid red; border-radius: 5px;">Erro ao enviar email: ' +
              JSON.stringify(error) +
              "</div>";

            // Remove a mensagem após 2 segundos
            setTimeout(() => {
              statusDiv.style.display = "none";
              statusDiv.innerHTML = "";
            }, 2000);
          }, 100);

    });
  });