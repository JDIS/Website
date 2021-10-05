# jdis.ca

Ce dépôt contient les ressources du site web public de JDIS, accessible à l'adresse suivante: <https://jdis.ca/>.

## Pour démarrer le projet

### 1. Installer les dépendances globales

Vous devez installer [Ruby](https://www.ruby-lang.org/fr/documentation/installation/).

Une fois que Ruby est installé, vous devez installer Bundler :

```sh
gem install bundler
```

### 2. Cloner le dépôt

```sh
git clone git@github.com:JDIS/Website.git && cd Website
```

### 3. Installer les dépendances du projet

```sh
bundle install
```

### 4. Démarrer le serveur

```sh
bundle exec jekyll serve
```

Le site web devrait être disponible localement à l'adresse suivante: <http://localhost:4000/>.

## Pour contribuer

Vos contributions sont les bienvenues. Que ce soit pour ajouter un événement, une photo ou une information, vous pouvez créer une _pull request_ depuis la branche qui contient vos modifications.
