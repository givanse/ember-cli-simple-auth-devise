ember-cli-simple-auth-devise
============================

Authenticate to a Rails/Devise server from an Ember CLI app. 

Step by step guide used to build this project: [ember-cli & ember-simple-auth-devise](http://givan.se/p/00000000)

## Current version

ember-cli 0.0.37
ember-simple-auth 0.6.2

## Build
```bash
git clone git@github.com:givanse/ember-cli-simple-auth-devise.git
```

```bash
cd my-backend
bundle update
rake db:migrate
rake db:seed
rails server
```
You can sign up and log in from the server pages.

```bash
cd my-frontend
npm install
bower update
ember init
# say no to every prompt (don't overwrite anything)
ember server --proxy http://0.0.0.0:3000
```
You can only log in from the ember app.

Two accounts will be already available for log in:
```
green@mail.com // 12345678
 pink@mail.com // 12345678
```

## About
Authentication is done using [ember-simple-auth](https://github.com/simplabs/ember-simple-auth) with [ember-cli-simple-auth-devise](https://github.com/simplabs/ember-cli-simple-auth-devise).

The backend has been disabled to send session cookies for json and xml requests, see [commit#b803fad](https://github.com/givanse/ember-cli-simple-auth-devise/commit/b803fad136d596af4d89b87ac18ca2ebe7065774). For other options, check this thread: [ember-simple-auth#201](https://github.com/simplabs/ember-simple-auth/issues/201)
