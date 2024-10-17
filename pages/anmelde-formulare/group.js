let serviceId;
let templateId;

fetch("/anmelde-formulare")
    .then(response => response.json()) 
    .then(data => {
        serviceId = data.serviceId;
        templateId = data.templateId;
    })
    .catch(error => {
        console.error('Error fetching serviceId and templateId:', error);
    });

function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        alter: document.getElementById("alter").value,
        level: document.getElementById("level").value,
        telefon: document.getElementById("telefon").value,
        days: document.getElementById("days").value,
        times: document.getElementById("time").value,
    };

    emailjs.send(serviceId, templateId, params)
        .then(function(res){
            alert("Gesendet");
        })
        .catch(function(error){
            console.error("Error sending email:", error);
            alert("Fehler beim Senden der Nachricht.");
        });
}




