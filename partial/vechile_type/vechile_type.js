angular.module('app').controller('VechileTypeCtrl',function( $scope, server ){

    $scope.errorMsg = "";
    $scope.hideAlert = true;
    $scope.listData = {};
    $scope.data = {};
    $scope.searchCriteria = "";

    $scope.focusVar = true;

    /*Populate data to html table*/
    $scope.search = function(){
        
        var url = 'vtype/name/'+$scope.searchCriteria;

        if( $scope.searchCriteria == "" ){
            url = 'vtype/';
        }

        server.get(url).then(
                /*success*/
                function(response){
                    $scope.listData = response;
                },
                /*failed*/
                function(response){
                    $scope.errorMsg = response.data.message;
                    $scope.hideAlert = false;
                }
        );  
    }

    /*Save data to database*/
    $scope.save =  function(){

        server.post('vtype',$scope.data).then(
            /*success*/
            function(response){
                delete $scope.data;
                $scope.errorMsg = "Data Saved.";
                $scope.search();
            },
            /*failed*/
            function(response){
                $scope.errorMsg = response.message;
                console.log(response);
            }
        );

        $scope.hideAlert = false;

    };

    /*Delete data from database*/
    $scope.delete = function(data){
        server.delete('vtype/'+data.id).then(
            /*success*/
            function(response){
                $scope.errorMsg = "Deleted.";
                $scope.search();
                delete $scope.data;
            },
            /*failed*/
            function(response){
                $scope.errorMsg = response.message;
                $scope.hideAlert = false;
            }
        );

        $scope.hideAlert = false;
    };

   /*Show data from database to html form*/
   $scope.getData = function(data){
        server.get('vtype/'+data.id).then(
            /*success*/
            function(response){
                $scope.data = response;
                $scope.hideAlert = true;
            },
            /*faileds*/
            function(response){
                console.log(response);
            }
        );

        $scope.hideAlert = true;
    }

   /*Clean Form*/
   $scope.cancel = function(){
        delete $scope.data;
        $scope.hideAlert = true;
        console.log('cancel');
   }

    $scope.search();
});