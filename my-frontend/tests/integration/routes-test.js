import Ember from 'ember';
import startApp from 'my-frontend/tests/helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Routes', {
  setup: function() {
    App = startApp();

    server = new Pretender(function() {
      this.post('/users/sign_in', function(request) {
        console.log(request);
        var rb = request.requestBody;
        if ( rb.match(/password%5D=validpassword/) ) {
          var payload = {user_token: 'gvSkMer7hZpw9iZsBZ4r',
                         user_email: 'example@mail.com'};
          return [200, {'Content-Type': 'application/json'}, 
                  JSON.stringify(payload)];
        } else {
          return [401];
        }
      });
    });
  
  }, // setup

  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('test failed login', function() {
  visit('/login').then(function() {
    fillIn('#identification', 'example@mail.com');
    fillIn('#password', 'an invalid password');
    click('#submit').then(function() {
      ok( find('form#login'), 'stuck at the login form');
    });
  });
});

test('test protected route', function() {
  visit('/protected').then(function() {
    ok( find('form#login'), 'needs to login before');
  });
});

/* Since it has a successful login it redirects us to the landing page (/) */
test('test login from protected route & logout', function() {
  visit('/protected').then(function() {
    fillIn('#identification', 'example@mail.com');
    fillIn('#password', 'validpassword');
    click('#submit').then(function() {
      ok( find('.ember-view').text().match(/this is a protected page/) );

      // logout 
      equal(find('button').text(), 'Logout', 'logout button available');
      click('button').then(function() {
        ok( find('.ember-view').text().match(/landing page/) );
      });
    });
  });
});

