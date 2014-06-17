import Ember from 'ember';
 
export default Ember.Route.extend(
    Ember.SimpleAuth.ApplicationRouteMixin, {
    beforeModel: function () {
        return this.csrf.fetchToken();
    }
});
