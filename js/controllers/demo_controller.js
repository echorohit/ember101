App.DemoController = Ember.ObjectController.extend({
  booleanValue: true
, list: [
    {name: "Achal"}
  , {name: "Saurabh"}
  ]
, actions:{
    toggle: function() {
      this.set('booleanValue', !this.get('booleanValue'));
    }
  }
});
