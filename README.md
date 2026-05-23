# Inventory Detection

Static frontend prototype for Snapptrip's inventory detection panel.

## Run

```powershell
npm install
npm run dev
```

Then open `http://127.0.0.1:3000`.

No external dependencies are required; the app uses a tiny Node static server.

## Included Screens

- Suspicious inventory alert queue
- Alert evidence and license rule breakdown
- Supplier history board
- Daily fraud digest

The data is mocked in `app.js` so product, operations, and engineering teams can review the workflow before API integration.
