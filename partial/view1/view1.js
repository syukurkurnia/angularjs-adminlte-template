angular.module('app').controller('View1Ctrl',function($scope,$http,localStorageService){
     $scope.data = {};

    $scope.save =  function(){  
       var success = function ( response ){
           console.log('SUCESS');
            console.log(response);
            $scope.search();
        };

        var failed = function  ( response ){
            console.log('FAIL');
            console.log(response);
        };

        $http({
          method: 'POST',
          url: 'http://localhost:1234/api/auth/login',
          data: $scope.data,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type':'application/json',
            'Cache-Control':'no-cache'
        }}).then(function(result) {
            console.log('SUK');
           console.log(result);
           console.log(result.data.token);
          localStorageService.set('tokken', result.data.token);
          //localStorageService.set('tokin','nanana');
       }, function(error) {
           console.log('GAG');
           console.log(error);
       });
  

    
     

   
    }

    $scope.testing =function(){
        var success = function ( response ){
           console.log('SUCESS');
            console.log(response);
            $scope.search();
        };

        var failed = function  ( response ){
            console.log('FAIL');
            console.log(response);
        };

        $http({
          method: 'GET',
          url: 'http://localhost:9966/api/coba',
          data: $scope.data,
        headers: {
            'X-Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdmxhZGFAZ21haWwuY29tIiwic2NvcGVzIjpbIlJPTEVfQURNSU4iLCJST0xFX1BSRU1JVU1fTUVNQkVSIl0sImlzcyI6Imh0dHA6Ly9zdmxhZGEuY29tIiwiaWF0IjoxNDkxMzAxNTIzLCJleHAiOjE0OTEzMDI0MjN9.Jb_utZdSBO_sUaonItIcfN-uQPv92Ugk0U6psUDm9pKgIpFt4mF9RfMjtEkyPantfM-RtzYpNSd2Lid1sKekHA'
        }}).then(function(result) {
            console.log('SUKSES');
           console.log(result);
       }, function(error) {
           console.log('GAGAL');
           console.log(error);
       });
    }



});