

// const serviceId = "service_jzctxt8";
// const templateId = "template_0664mfm"; 

import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

// Den aktuellen Dateipfad ermitteln
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


var app = express();

// Statische Dateien im "public"-Verzeichnis bereitstellen
app.use(express.static(path.join(__dirname, 'pages')));

const serviceId = "service_jzctxt8";
const templateId = "template_0664mfm";

//Individuals logdaten
const serviceId_individual = "service_0w07j7i";
const templateId_individual = "template_ey8n74s";
const templateId_group = "template_gimxpxp"; 

// Passwort als JSON über die /pass-Endpunkt senden
app.get('/kontakt', function (req, res) {
  res.json({ serviceId, templateId });
});

app.get('/anmelde-formulare', function (req, res) {
  res.json({serviceId_individual, templateId_individual, templateId_group});
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
});

