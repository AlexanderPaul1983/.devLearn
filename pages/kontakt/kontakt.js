


function sendMail() {
    // Zuerst die serviceId und templateId holen
    fetch("/kontakt")
        .then(response => response.json()) 
        .then(data => {
            const serviceId = data.serviceId;
            const templateId = data.templateId;
            console.log(serviceId + " " + templateId);
            
            // Jetzt erst die Nachricht senden, nachdem die IDs geladen wurden
            var params = {
                vorname: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            };
            
            return emailjs.send(serviceId, templateId, params);
        })
        .then(function(res) {
            alert("Gesendet");
        })
        .catch(function(error) {
            console.error("Fehler beim Senden der Nachricht:", error);
            alert("Fehler beim Senden der Nachricht.");
        });
}




