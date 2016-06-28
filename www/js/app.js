// Ionic Starter App

var db = null;

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    //alert('alert 1');
    db = $cordovaSQLite.openDB({ name: "my.db", location:"default" });
    //alert('alert 2');
    $cordovaSQLite.execute(db, 'SELECT upper(?) as upper_text', ['Test string']).then(function(res) {
      //console.log("insertId: " + res.insertId);
      alert('got sql upper_text: ' + res.rows.item(0).upper_text);
    }, function (err) {
      console.error(err);
      alert('sql error: ' + JSON.stringify(err));
    });
  });
})
