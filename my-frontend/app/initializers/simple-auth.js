import Ember from 'ember';
 
export default {
    name: 'authentication',
    initialize: function(container, application) {
        Ember.SimpleAuth.setup(container, application, {
            authorizerFactory: 'ember-simple-auth-authorizer:devise'
        });
    }
};
