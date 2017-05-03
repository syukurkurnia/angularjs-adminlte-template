angular.module('app', ['ui.bootstrap','ui.router','ngAnimate','ngSanitize','mwl.confirm','LocalStorageModule']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('view1', {
        url: '/view_satu',
        templateUrl: 'partial/view1/view1.html'
    });
    $stateProvider.state('vechile_merk', {
        url: '/vechile_merk',
        templateUrl: 'partial/vechile_merk/vechile_merk.html'
    });
    $stateProvider.state('vechile_type', {
        url: '/vechile_type',
        templateUrl: 'partial/vechile_type/vechile_type.html'
    });
    $stateProvider.state('vechile', {
        url: '/vechile',
        templateUrl: 'partial/vechile/vechile.html'
    }); 
    
   /*$stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partial/home/home.html'
    });*/
    
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

   

});

angular.module('app').config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('lyla')
    .setStorageType('sessionStorage')
    .setNotify(true, true)
});

angular.module('app').directive('focusMe', function($timeout) {
  return {
    link: function(scope, element, attrs) {
      scope.$watch(attrs.focusMe, function(value) {
        if(value === true) { 
          console.log('value=',value);
          //$timeout(function() {
            element[0].focus();
            scope[attrs.focusMe] = false;
          //});
        }
      });
    }
  };
});

angular.module('app').run(function($rootScope,$location) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    /*$rootScope.$on('$locationChangeStart', function (event, next, current) {
        console.log('url changed bro :' + current);
        
        $location.path('/login');
    });*/

});





