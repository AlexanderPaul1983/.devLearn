function sendMail(){
     // Verhindert das Neuladen der Seite
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    const serviceId = "service_jzctxt8";
    const templateId = "template_0664mfm";  // Korrektur des Tippfehlers

    emailjs.send(serviceId, templateId, params).then(function(res){
        alert("Gesendet")
    })  
}
