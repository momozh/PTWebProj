
var app = angular.module('aboutWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {title: 'About Potato - Potato Fintech', templateUrl: "ajs-pages/pages/About.html", controller: "PageCtrl"})
    // Pages
    .when("/Policies", {title: 'Policies - Potato Fintech', templateUrl: "ajs-pages/pages/Policies.html", controller: "PageCtrl"})
    .when("/About", {title: 'About Us - Potato Fintech', templateUrl: "ajs-pages/pages/About.html", controller: "PageCtrl"})
	.when("/About/About-Potato-Logo", {title: 'Explore our new Logo - Potato Fintech', templateUrl: "ajs-pages/pages/About.html#About-Potato-Logo", controller: "PageCtrl"})
    .when("/FAQ", {title: 'About Us - Potato Fintech', templateUrl: "ajs-pages/pages/FAQ.html", controller: "PageCtrl"})
	.when("/Sitemap", {title: 'About Us - Potato Fintech', templateUrl: "ajs-pages/pages/Sitemap.html", controller: "PageCtrl"})
	//.when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    //.when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    //.when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    //.when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    //.when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    //.otherwise("/404", {title: 'Opps... - Potato Fintech', templateUrl: "ajs-pages/pages/error.html", controller: "PageCtrl"});
	.when('/error', {  templateUrl: 'ajs-pages/pages/error.html'})
	.otherwise({ redirectTo: '/error'});

}]);



app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);



app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});