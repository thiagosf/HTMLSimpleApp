(function($, window) {

  var App = function() {

  };

  App.prototype.init = function() {
    this.setLibs();
    console.log("App.init");
  };

  App.prototype.setLibs = function(first_argument) {
    $(document).foundation();
    FastClick.attach(document.body);
  };

  $(function() {
    var app = new App();
    app.init();
  });

})(jQuery, window, undefined);
