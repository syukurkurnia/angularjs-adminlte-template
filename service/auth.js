angular.module('app').factory('auth',function(localStorageService,$state,constants) {


    var auth = {
        setAuthenticate:function(credential){
            localStorageService.set('cred',credential);
            window.location =constants.rootWeb();
        },

        logout:function(){
            localStorageService.clearAll();
            window.location =constants.loginPage();
        },

        removeCredential:function(){
            localStorageService.clearAll();
        },

        getCredential:function(credential){
           return localStorageService.get('cred');
        }
    };

    return auth;
});