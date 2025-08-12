


import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();

// Middleware für JSON und URL-encoded Daten
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'pages')));

// Resend E-Mail-Service konfigurieren
const resend = new Resend('re_DAjbDvzH_CPuuponaKBPUcdrYFm1MQmfy');

// E-Mail-Versendung für individuelle Anfragen
app.post('/send-individual', async (req, res) => {
    try {
        const { vorname, nachname, alter, email, level, telefon } = req.body;
        
        const { data, error } = await resend.emails.send({
            from: 'dotDivLearn <onboarding@resend.dev>',
            to: ['alexanderpaul@gmx.de'],
            subject: 'Neue individuelle Anfrage - dotDivLearn',
            html: `
                <h2>Neue individuelle Anfrage</h2>
                <p><strong>Vorname:</strong> ${vorname}</p>
                <p><strong>Nachname:</strong> ${nachname}</p>
                <p><strong>Alter:</strong> ${alter}</p>
                <p><strong>E-Mail:</strong> ${email}</p>
                <p><strong>Level:</strong> ${level}</p>
                <p><strong>Telefon:</strong> ${telefon || 'Nicht angegeben'}</p>
                <p><strong>Formular-Typ:</strong> Individuell</p>
            `
        });

        if (error) {
            console.error('Fehler beim Senden der E-Mail:', error);
            res.status(500).json({ success: false, message: 'Fehler beim Senden der E-Mail' });
        } else {
            res.json({ success: true, message: 'E-Mail erfolgreich gesendet' });
        }
    } catch (error) {
        console.error('Fehler beim Senden der E-Mail:', error);
        res.status(500).json({ success: false, message: 'Fehler beim Senden der E-Mail' });
    }
});

// E-Mail-Versendung für Gruppenanfragen
app.post('/send-group', async (req, res) => {
    try {
        const { vorname, nachname, alter, email, level, telefon, days, time } = req.body;
        
        const { data, error } = await resend.emails.send({
            from: 'dotDivLearn <onboarding@resend.dev>',
            to: ['alexanderpaul@gmx.de'],
            subject: 'Neue Gruppenanfrage - dotDivLearn',
            html: `
                <h2>Neue Gruppenanfrage</h2>
                <p><strong>Vorname:</strong> ${vorname}</p>
                <p><strong>Nachname:</strong> ${nachname}</p>
                <p><strong>Alter:</strong> ${alter}</p>
                <p><strong>E-Mail:</strong> ${email}</p>
                <p><strong>Level:</strong> ${level}</p>
                <p><strong>Telefon:</strong> ${telefon || 'Nicht angegeben'}</p>
                <p><strong>Bevorzugte Tage:</strong> ${days || 'Nicht angegeben'}</p>
                <p><strong>Bevorzugte Zeiten:</strong> ${time || 'Nicht angegeben'}</p>
                <p><strong>Formular-Typ:</strong> Gruppe</p>
            `
        });

        if (error) {
            console.error('Fehler beim Senden der E-Mail:', error);
            res.status(500).json({ success: false, message: 'Fehler beim Senden der E-Mail' });
        } else {
            res.json({ success: true, message: 'E-Mail erfolgreich gesendet' });
        }
    } catch (error) {
        console.error('Fehler beim Senden der E-Mail:', error);
        res.status(500).json({ success: false, message: 'Fehler beim Senden der E-Mail' });
    }
});

// Startseite bedienen
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'pages/home', 'index.html'));
});

app.listen(4444, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('App startet auf Port 4444');
  console.log('E-Mail-Server bereit');
});

