
// methods to set a List of Days which have been chosen by user
document.getElementById('addButton').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Hole den eingegebenen Wert
    let dayInput = document.getElementById('dayInput');
    let day = dayInput.value.trim();
    
    // Überprüfen, ob der Wert nicht leer ist und noch nicht in der Liste steht
    if(day !== "" && !isDayInList(day)) {
        addDayToList(day);
        days.push(day);
        dayInput.value = ""; 
    }
});

let days = [];

function isDayInList(day) {
    let dayListItems = document.querySelectorAll('#dayList li');
    for(let item of dayListItems) {
        if(item.textContent.replace('✖', '').trim() === day) {
            return true;
        }
    }
    return false;
}

function addDayToList(day) {
    let li = document.createElement('li');
    li.textContent = day + " ";
    li.style.color = 'white';
    
    createRemoveBtn(li, 'dayList');
}
// methods to set a List of ours which have been chosen by user

let addButton = document.getElementById('addStunden');
addButton.addEventListener('click', function(event){
    event.preventDefault();
    
    let input = document.getElementById('stundenInput');
    let inputValue = input.value.trim();

    if(inputValue !== "" && !isStundeInList(inputValue)){
        addStundeToList(inputValue);
        stundenList.push(stundenListElement);
        input.value = '';
    }
});

let stundenList = [];

function addStundeToList(inputValue){
    let li = document.createElement('li');
    li.textContent = inputValue + " ";
    li.style.color = 'white';
    createRemoveBtn(li, 'stundenList');
}

function createRemoveBtn(li, ul){
    let removeBtn = document.createElement('span');
    removeBtn.textContent = "✖";
    removeBtn.style.color = 'red';
    removeBtn.style.cursor = 'pointer';
    
    removeBtn.addEventListener('click', function() {
        li.remove();
    });
    
    li.appendChild(removeBtn);
    document.getElementById(ul).appendChild(li);
}

function isStundeInList(inputValue) {
    let stundeListItems = document.querySelectorAll('#stundenList li');
    for(let item of stundeListItems) {
        if(item.textContent.replace('✖', '').trim() === inputValue) {
            return true;
        }
    }
    return false;
}

function sendMail(){
    let params = 
        {
        vorname: document.getElementById('vorname').value,
        nachname: document.getElementById('nachname').value,
        alter: document.getElementById('alter').value,
        name_des_erziehungsberechtigten: document.getElementById('name_des_erziehungsberechtigten').value,
        email: document.getElementById('email').value,
        telefon: document.getElementById('telefon').value,
        html: document.getElementById('html').value,
        css: document.getElementById('css').value,
        javascript: document.getElementById('javascript').value,
        java: document.getElementById('java').value,
        andere_vorkenntnisse: document.getElementById('andere_vorkenntnisse').value,
        anfaenger: document.getElementById('anfaenger').value,
        fortgeschrittener_anfaenger: document.getElementById('fortgeschrittener_anfaenger').value,
        mittelstufe: document.getElementById('mittelstuffe').value,
        fortgeschritten: document.getElementById('fortgeschritten').value,
        days: days,
        stundenListe: stundenList
        };

        Email.send({
            // c49695d0-7ea7-4fa9-894c-b0206d156278
              Host : "smtp.elasticemail.com",
              Username : "alexanderpaulrosenheim@gmail.com",
              Password : "F477E12F4F3899712063FBFC6BCE786DD048",
              To : 'alexanderpaulrosenheim@gmail.com',
              From : "alexanderpaulrosenheim@gmail.com",
              Subject : "Anfrage für Individualunterricht",
              Body : "Persönliche Daten: /n" + "Name: " +  params.vorname + " " + params.nachname + "/n" 
                + "Alter: " + params.alter + "/n"
                + "Name des Erziehungsberechtigten: " + params.name_des_erziehungsberechtigten + "/n"
                + "Email-Addresse: " + params.email + "/n"
                + "Telefon: " + params.telefon + "/n"
                + "Augewählte Vorkenntnisse: " + "HTML: " + params.html + " CSS: "
                + params.css + " Javascript: " + params.javascript + " Java: " + params.java + "/n"
                + "Andere Vorkenntnisse: " + params.andere_vorkenntnisse + "/n"
                + "Persönliche Einschätzung:  Anfänger " + params.anfaenger + " Fortgeschrittener-Anfänger " + " Mittelstuffe "
                + params.mittelstufe + " Fortgeschritten " + params.fortgeschritten + "/n"
                + "Gewünschte Unterrichtstage: " + params.days + "/n"
                + "Stunden: " + params.stundenListe,
          }).then(
            message => alert(message)
          );
}


