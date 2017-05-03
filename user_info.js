angular.module('app').controller('UserInfoCtrl',function($scope,auth){

    var credential = auth.getCredential();

     if (credential == null){
         auth.logout();
     }

    $scope.userName = credential.userName;
    $scope.role = credential.role;

   

    $scope.logout = function(){
        auth.logout();
    }
});