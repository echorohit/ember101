App = Ember.Application.create();

var Bookmark = Ember.Object.extend({
  to_link: function() {
    return "<a href='" + this.get('url') + "'>" + this.get('name') + "</a>";
  }
});

Bookmark.reopen({
  formatted: function() {
    return this.get('name') + " - " + this.get("url");
  }
});

var bookmark = Bookmark.create({'name': 'airwoot', 'url': 'http://airwoot.com'});


