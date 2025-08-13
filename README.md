# dotDivLearn - IT-Nachhilfe Website

Eine moderne Website für IT-Nachhilfe und Programmierkurse.

## 🚀 Schnellstart

### Voraussetzungen
- Node.js (Version 16 oder höher)
- npm oder yarn

### Installation

1. **Repository klonen:**
```bash
git clone <repository-url>
cd dotDivLearn
```

2. **Dependencies installieren:**
```bash
npm install
```

3. **Umgebungsvariablen einrichten:**
```bash
# .env Datei erstellen
cp .env.example .env
```

4. **Umgebungsvariablen konfigurieren:**
```env
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here

# Server Configuration
PORT=4444
NODE_ENV=production

# Email Configuration
ADMIN_EMAIL=your_admin_email@example.com
FROM_EMAIL=dotDivLearn <onboarding@resend.dev>
```

5. **Server starten:**
```bash
npm run dev
```

## 🔒 Sicherheit

### Wichtige Sicherheitshinweise:

1. **API-Schlüssel niemals im Code speichern!**
   - Verwenden Sie immer Umgebungsvariablen
   - Die `.env` Datei ist bereits in `.gitignore` aufgenommen

2. **Produktionsumgebung:**
   - Setzen Sie `NODE_ENV=production`
   - Verwenden Sie sichere Passwörter
   - Aktivieren Sie HTTPS

3. **Regelmäßige Updates:**
   - Halten Sie alle Dependencies aktuell
   - Führen Sie `npm audit` regelmäßig aus

## 📁 Projektstruktur

```
dotDivLearn/
├── pages/                    # Statische HTML-Seiten
│   ├── home/                # Startseite
│   ├── anmelde-formulare/   # Anmeldeformulare
│   ├── kurse/              # Kursseiten
│   ├── about/              # Über uns
│   ├── kontakt/            # Kontaktseite
│   └── footer/             # Footer-Seiten
├── server.js               # Express Server
├── package.json            # Dependencies
├── .env                    # Umgebungsvariablen (nicht im Git)
├── .env.example           # Beispiel für Umgebungsvariablen
└── .gitignore             # Git Ignore-Datei
```

## 🛠️ Entwicklung

### Verfügbare Scripts:

```bash
npm run dev          # Startet den Server im Entwicklungsmodus
npm start           # Startet den Server im Produktionsmodus
npm audit           # Überprüft Sicherheitslücken
```

### E-Mail-System:

Die Website verwendet Resend für E-Mail-Versendung:
- Individuelle Anfragen: `/send-individual`
- Gruppenanfragen: `/send-group`
- Kontaktformular: EmailJS (sollte auf Resend umgestellt werden)

## 🌐 Deployment

### Render (Empfohlen):

1. Verbinden Sie Ihr Repository mit Render
2. Setzen Sie die Umgebungsvariablen in Render
3. Deploy automatisch bei Git-Push

### Umgebungsvariablen in Render:

```
RESEND_API_KEY=re_your_actual_api_key
ADMIN_EMAIL=alexanderpaul@gmx.de
FROM_EMAIL=dotDivLearn <onboarding@resend.dev>
PORT=10000
NODE_ENV=production
```

## 🔧 Troubleshooting

### Häufige Probleme:

1. **"Missing required environment variable":**
   - Überprüfen Sie, ob die `.env` Datei existiert
   - Stellen Sie sicher, dass alle erforderlichen Variablen gesetzt sind

2. **E-Mails werden nicht gesendet:**
   - Überprüfen Sie den Resend API-Schlüssel
   - Prüfen Sie die Server-Logs

3. **Port bereits in Verwendung:**
   - Ändern Sie den PORT in der `.env` Datei
   - Oder beenden Sie andere Prozesse auf diesem Port

## 📞 Support

Bei Fragen oder Problemen:
- E-Mail: alexanderpaul@gmx.de
- Telefon: 0157 56721520

## 📄 Lizenz

ISC License - Alexander Paul
