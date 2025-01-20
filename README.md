# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Backend

- Créer une database sur https://cloud.mongodb.com/
- Récupérer l'URI de la DB: mongodb+srv://<db_user>:<db_password>@cluster0.ifcem.mongodb.net/
- Mettre cette URI dans le fichier .env du backend (DATABASE_URL)
- Changer le fichier server/database/connection.js et y intégrer cela:

```js
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
dotEnv.config()
console.log(process.env.DATABASE_URL)
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
```

- Lancer le server: `npm run dev:server`. Verifier que la connection DB est bien réalisée
- Dans un autre terminal, lancer la commande de création des comptes: `npm run populate-db`