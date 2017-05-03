angular.module('app').factory('server',function( $http,localStorageService,$q,auth ) {

    var rootUrl = 'http://localhost:1234/';
    var token = 'Bearer ' + localStorageService.get('tokken');
    var loginUrl = rootUrl + 'api/auth/login';
    
    var server = {

        get: function(subUrl){

            var deferred = $q.defer();

            $http({
                    method: 'GET',
                    url: rootUrl+subUrl,
                    headers: {
                        'X-Authorization': token
                    }
                   }
            ).success(
                function(response){
                    deferred.resolve(response);
                }
            ).error(
                function(response){
                    deferred.reject(response);
                    if(response.status == 401){
                       auth.logout();
                    }
                }
            );

            return deferred.promise;

        },
        
        post:function(subUrl,data){
            
            var deferred = $q.defer(); 

            $http({
                    method: 'POST',
                    url: rootUrl+subUrl,
                    headers: {
                        'X-Authorization': token
                    },
                    data: data
                }).success(
                    function(response){
                        deferred.resolve(response);
                    }
                ).error(
                    function(response){
                        deferred.reject(response);
                        if(response.status == 401){
                            auth.logout();
                        }
                    }
                );

                return deferred.promise;
        },
        
        delete:function(subUrl){

            var deferred = $q.defer();

            $http({
                method: 'DELETE',
                url: rootUrl+subUrl,
                headers:{
                    'X-Authorization': token
                }
            }).success(
                function(response){
                    deferred.resolve(response);
                }
            ).error(
                function(response){
                    deferred.reject(response);
                    if(response.status == 401 ){
                        auth.logout();
                    }
                }
            );

            return deferred.promise;
        },
        
        put:function(subUrl,success,failed){

            var deferred = $q.defer();

            $http.put(rootUrl+subUrl).then(success,failed);
            $http({
                method: 'PUT',
                url: rootUrl+subUrl,
                headers:{
                    'X-Authorization': token
                }
            }).success(
                function(response){
                    deferred.resolve(response);
                }
            ).error(
                function(response){
                    deferred.reject(response)
                    if(response.status == 401){
                        auth.logout();
                    }
                }
            )
        },

        login:function(credential){
            
            var deferred = $q.defer(); 

            console.log('inservice');
            console.log(credential);

            $http({
                    method: 'POST',
                    url: loginUrl,
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type':'application/json',
                        'Cache-Control':'no-cache'
                    },
                    data: credential
                }).success(
                    function(response){
                        deferred.resolve(response);
                    }
                ).error(
                    function(response){
                        deferred.reject(response);
                        /*(if(response.status == 401){
                            window.location = 'http://localhost:9001/login.html';
                        }*/
                    }
                );

                return deferred.promise;
        },
        
        rootUrl: function(){
            return rootUrl;
        }

    };

    return server;
});