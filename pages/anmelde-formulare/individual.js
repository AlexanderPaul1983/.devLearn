


function sendAnfrage() {

    fetch("/anmelde-formulare")
        .then(response => response.json())
        .then(data => {
            const serviceId = data.serviceId_individual;
            const templateId = data.templateId_individual;

            let params =
            {
                vorname: document.getElementById('vorname').value,
                nachname: document.getElementById('nachname').value,
                alter: document.getElementById('alter').value,
                name_des_erziehungsberechtigten: document.getElementById('name_des_erziehungsberechtigten').value,
                email: document.getElementById('email').value,
                telefon: document.getElementById('telefon').value,
            };

            return emailjs.send(serviceId, templateId, params);
        })
        .then(function (res) {
            alert("Gesendet");
        })
        .catch(function (error) {
            console.error("Fehler beim Senden der Nachricht:", error);
            alert("Fehler beim Senden der Nachricht.");
        });
}


