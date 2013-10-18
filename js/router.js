App.Router.map(function() {
  this.resource('about', function() {
    this.route('team');
  });

  this.route('contact');

  this.resource('bookmarks');
});


var bookmark1 = App.Bookmark.create({'name': 'airwoot', 'url': 'http://airwoot.com'});
var bookmark2 = App.Bookmark.create({'name': 'google', 'url': 'http://google.com'});


App.BookmarksRoute = Ember.Route.extend({
  model: function() {
    return [bookmark1, bookmark2];
  }
});


