App.Router.map(function() {
  this.resource('about', function() {
    this.route('team');
  });

  this.route('contact');
  this.resource('bookmarks');
  this.resource('bookmark', {path: '/bookmarks/:bookmark_id'});

  this.route('demo');
});


var bookmark1 = App.Bookmark.create({id: 1, 'name': 'airwoot', 'url': 'http://airwoot.com'});
var bookmark2 = App.Bookmark.create({id: 2, 'name': 'google', 'url': 'http://google.com'});

App.BookmarksRoute = Ember.Route.extend({
  model: function() {
    return [bookmark1, bookmark2];
  }
});
