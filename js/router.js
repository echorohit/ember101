App.Router.map(function() {
  this.resource('about', function() {
    this.route('team');
  });

  this.route('contact');
  this.resource('bookmarks');
  this.resource('bookmark', {path: '/bookmarks/:bookmark_id'});

  this.route('demo');
});


App.FIXTURES = [
  {id: 1, 'name': 'airwoot', 'url': 'http://airwoot.com'}
, {id: 2, 'name': 'google', 'url': 'http://google.com'}
];

App.BookmarksRoute = Ember.Route.extend({
  model: function() {
    var objects = [];
    App.FIXTURES.forEach(function(item) {
      objects.push(App.Bookmark.create(item));
    });
    return objects;
  }
});

App.BookmarkRoute = Ember.Route.extend({
  model: function(params) {
    return App.Bookmark.create(App.FIXTURES.findBy('id',parseInt(params.bookmark_id)));
  }
});
