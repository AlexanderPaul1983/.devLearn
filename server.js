


import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();

// Middleware für JSON und URL-encoded Daten
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'pages')));

// Validate required environment variables
const requiredEnvVars = ['RESEND_API_KEY', 'ADMIN_EMAIL'];
for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        console.error(`❌ Missing required environment variable: ${envVar}`);
        process.exit(1);
    }
}

// Resend E-Mail-Service konfigurieren
const resend = new Resend(process.env.RESEND_API_KEY);

// E-Mail-Versendung für individuelle Anfragen
app.post('/send-individual', async (req, res) => {
    try {
        const { vorname, nachname, alter, email, level, telefon } = req.body;
        
        const { data, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL || 'dotDivLearn <onboarding@resend.dev>',
            to: [process.env.ADMIN_EMAIL],
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
            from: process.env.FROM_EMAIL || 'dotDivLearn <onboarding@resend.dev>',
            to: [process.env.ADMIN_EMAIL],
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

const PORT = process.env.PORT || 4444;

app.listen(PORT, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('✅ App startet auf Port', PORT);
  console.log('✅ E-Mail-Server bereit');
  console.log('✅ Environment variables loaded');
});

