App = Ember.Application.create();

var counter = 0;

var Bookmark = Ember.Object.extend({
  to_link: function() {
    return "<a href='" + this.get('url') + "'>" + this.get('name') + "</a>";
  }
, formatted: function() {
    return this.get('name') + " - " + this.get("url");
  }
, link: function() {
    return this.to_link()
  }.property("name", "url")
, updateCounter: function() {
    counter += 1;
    console.info(counter);
  }.observes("name")
});

var bookmark = Bookmark.create({'name': 'airwoot', 'url': 'http://airwoot.com'});


