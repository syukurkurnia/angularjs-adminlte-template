angular.module('app').controller('LoginCtrl',function( $scope,server,localStorageService,auth){
    
    $scope.data = {};

    $scope.hideAlert = true;
    $scope.errorMsg = "";

    /*Save data to database*/
    $scope.login =  function(){
        
        server.login($scope.data).then(
            function(response){
                localStorageService.set('tokken',response.token);
                auth.setAuthenticate(response);
            },
            function(response){
                 $scope.hideAlert = false;
                 $scope.errorMsg = response.message;
            }
        );
    };

  

  

});