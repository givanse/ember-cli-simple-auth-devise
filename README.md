ember-cli-simple-auth-devise
============================

Authenticate to a Rails/Devise server from an Ember CLI app. 

Step by step guide used to build this project: [ember-cli & ember-simple-auth-devise](http://givan.se/p/00000000)

## Current version

The project is currently using:

 * ember-cli 0.1.1
 * ember-simple-auth 0.6.7
 * rails 4.1.8

## Build
```bash
git clone https://github.com/givanse/ember-cli-simple-auth-devise.git
```

```bash
cd my-backend
bundle update
rake db:migrate
rake db:seed
rails server
```

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

The backend has been completely disabled from creating sessions. 
If you want to restrict the creation of sessions only for JSON and XML requests, see the branch no-session-for-json.
