App.Bookmark = Ember.Object.extend({
  to_link: function() {
    return "<a href='" + this.get('url') + "'>" + this.get('name') + "</a>";
  }
, formatted: function() {
    return this.get('name') + " - " + this.get("url");
  }
, link: function() {
    return this.to_link()
  }.property("name", "url")
});
