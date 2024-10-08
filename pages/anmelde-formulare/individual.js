

function sendAnfrage(){
    let params = 
        {
        vorname: document.getElementById('vorname').value,
        nachname: document.getElementById('nachname').value,
        alter: document.getElementById('alter').value,
        name_des_erziehungsberechtigten: document.getElementById('name_des_erziehungsberechtigten').value,
        email: document.getElementById('email').value,
        telefon: document.getElementById('telefon').value,
        };


        const serviceId = "service_0w07j7i";
        const templateId = "template_ey8n74s";  
    
        emailjs.send(serviceId, templateId, params).then(function(res){
            alert("Gesendet");
        })  
}


