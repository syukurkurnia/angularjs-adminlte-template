angular.module('app').factory('constants',function() {

    var rootWeb = 'http://localhost:9001/';

    var constants = {
        resource:function(){
            return 'http://localhost:1234/';
        },
        loginPage:function(){
            return rootWeb + 'login.html';
        },
        registerPage:function(){
            return rootWeb + 'register.html';
        },
        homePage:function(){
            return rootWeb + 'home.html';
        },
        rootWeb:function(){
            return rootWeb;
        }
    };

    return constants;
});