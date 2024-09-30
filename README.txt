Pour installer deployer le tout il faut : 

1 - Installer les dépendances dans le back et le front avec 'npm install'.
2 - Modifier dans "simpleAPI-nest/src/database/database.module.ts" le mot de passe de la database et potentiellement le port ou le nom de la database si vous avez un nom différent
3 - Lancer le back-end en allant dans un terminal, dans le dossier 'tkorp-api' avec 'npm run start:dev', cela devrait créer les tables.
4 - Remplir les tables avec des données via MySQL.
5 - Lancer le front-end en allant dans un terminal dans 'simpleAPI-next' avec la commande 'npm run dev', cela devrait normalement lancer sur le port localhost:3000 le site.
