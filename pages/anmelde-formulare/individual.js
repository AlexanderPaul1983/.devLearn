document.getElementById('addButton').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Hole den eingegebenen Wert
    let dayInput = document.getElementById('dayInput');
    let day = dayInput.value.trim();
    
    // Überprüfen, ob der Wert nicht leer ist und noch nicht in der Liste steht
    if(day !== "" && !isDayInList(day)) {
        addDayToList(day);
        dayInput.value = ""; // Eingabefeld leeren
    }
});

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
    
    let removeBtn = document.createElement('span');
    removeBtn.textContent = "✖";
    removeBtn.style.color = 'red';
    removeBtn.style.cursor = 'pointer';
    
    // Löschen Funktionalität hinzufügen
    removeBtn.addEventListener('click', function() {
        li.remove();
    });
    
    li.appendChild(removeBtn);
    document.getElementById('dayList').appendChild(li);
}
