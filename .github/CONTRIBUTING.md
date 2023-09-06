# Contribution au site JDIS

## Démarrage rapide

1. Forker le projet
![fork a repo](https://docs.github.com/assets/cb-79331/images/help/repository/fork_button.png)

2. Cloner le dépôt forké
```bash
git clone https://github.com/${your_username}/Website
```

3. Configurer le dépôt distant (upstream)
```bash
git remote add upstream https://github.com/JDIS/Website
```

4. Assurez-vous de récupérer les dernières modifications de l'upstream
```bash
git pull upstream main
git push origin main     # to update your remote fork
```

5. Crée une branche séparée
```bash
git checkout -a feat/${name_of_your_modification}
```

6. Effectuer les modifications

7. Ajouter les nouveaux fichiers modifiers

8. Effectuer un commit de vos modifications

7. Pousser vos modifications
```bash
git push origin feat/${name_of_your_modification}
```

10. Cr/er une pull request sur Github