fetch("/kontakt").then(response =>{response.json})
.then(data =>{
   let serviceId = data.serviceId;
   let templateId = data.templateId;
}).then(sendMail(serviceId, templateId));



function sendMail(serviceId, templateId){
    fetch("/kontakt").then(response =>{response.json})
.then(data =>{
   serviceId = data.serviceId;
   templateId = data.templateId;
});

let serviceId;
let templateId;
     
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
     

    emailjs.send(serviceId, templateId, params).then(function(res){
        alert("Gesendet");
    })  
}


