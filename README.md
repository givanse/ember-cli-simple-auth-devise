ember-cli-simple-auth-devise
============================

Authenticate to a Rails/Devise server from an Ember CLI app. 

Step by step guide used to build this project: [ember-cli & ember-simple-auth-devise](http://givan.se/p/00000000)

## Build
```
git clone git@github.com:givanse/ember-cli-simple-auth-devise.git
```

```
cd my-backend
bundle update
rake db:migrate
rake db:seed
rails server
```
You can sign up and log in from the server pages.

```
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
