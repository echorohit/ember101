App.AlertView = Ember.View.extend({
  templateName: "_alert"
, classNameBindings: ["defaultClass", "kind"]
, defaultClass: "alert-box"
, kind: null

, click: function() {
    var _this = this;
    this.$().fadeOut(300, function() {
      _this.remove();
    });
  }

, didInsertElement: function() {
    this.$().hide().fadeIn(300);
  }
});
