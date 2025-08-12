// Formular-Handler für Gruppenanfragen
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('groupForm');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Formulardaten sammeln
        const formData = {
            vorname: document.getElementById('vorname').value.trim(),
            nachname: document.getElementById('nachname').value.trim(),
            alter: document.getElementById('alter').value.trim(),
            email: document.getElementById('email').value.trim(),
            level: document.getElementById('level').value.trim(),
            telefon: document.getElementById('telefon').value.trim(),
            days: document.getElementById('days').value.trim(),
            time: document.getElementById('time').value.trim()
        };
        
        // Validierung
        if (!formData.vorname || !formData.nachname || !formData.alter || !formData.email || !formData.level) {
            alert('Bitte füllen Sie alle Pflichtfelder aus.');
            return;
        }
        
        // Alter validieren
        const alterNum = parseInt(formData.alter);
        if (isNaN(alterNum) || alterNum < 1 || alterNum > 120) {
            alert('Bitte geben Sie ein gültiges Alter ein.');
            return;
        }
        
        // Email validieren
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return;
        }
        
        try {
            // Senden-Button deaktivieren
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Wird gesendet...';
            
            // Formular an Server senden (über Live-Website)
            const response = await fetch('https://devlearn-x3g0.onrender.com/send-group', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                alert('Ihre Anfrage wurde erfolgreich gesendet!');
                form.reset();
                // Weiterleitung zur Dankeseite
                window.location.href = 'https://devlearn-x3g0.onrender.com/thank-you.html';
            } else {
                alert('Fehler beim Senden der Anfrage. Bitte versuchen Sie es erneut.');
            }
        } catch (error) {
            console.error('Fehler:', error);
            alert('Fehler beim Senden der Anfrage. Bitte versuchen Sie es erneut.');
        } finally {
            // Senden-Button wieder aktivieren
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Senden';
        }
    });
});


