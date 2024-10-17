
let serviceId;
let templateId;

fetch("/anmelde-formulare")
    .then(response => response.json())
    .then(data => {
        serviceId = data.serviceId_individual;
        templateId = data.templateId_individual;
    })
    .catch(error => {
        console.error('Error fetching serviceId and templateId:', error);
    });

function sendAnfrage() {
    let params =
    {
        vorname: document.getElementById('vorname').value,
        nachname: document.getElementById('nachname').value,
        alter: document.getElementById('alter').value,
        name_des_erziehungsberechtigten: document.getElementById('name_des_erziehungsberechtigten').value,
        email: document.getElementById('email').value,
        telefon: document.getElementById('telefon').value,
    };




    emailjs.send(serviceId, templateId, params)
        .then(function (res) {
            alert("Gesendet");
        })
        .catch(function (error) {
            console.error("Error sending email:", error);
            alert("Fehler beim Senden der Nachricht.");
        });

}


