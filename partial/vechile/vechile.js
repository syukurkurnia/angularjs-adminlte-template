angular.module('app').controller('VechileCtrl',function($scope,server){

    $scope.errorMsg = "";
    $scope.hideAlert = true;
    $scope.listData = {};
    $scope.data = {};
    $scope.searchCriteria = "";

    $scope.focusVar = true;

    $scope.merk = {};
    $scope.type = {};

    /*Data initialization*/
    var init = function(){

        /* I. Load data vechileMerk for combo*/
        server.get('vmerk/').then(
            /*Success*/
            function(response){
                $scope.merk = response.content;
            },
            /*Failed*/
            function(response){
                $scope.errorMsg = response.message;
            }
        );

        /* II. Load data vechileType for combo*/
        server.get('vtype/').then(
                   /*Success*/
                  function(response){
                    $scope.type = response.content;
                  },
                  /*Failed*/
                  function(response){
                    $scope.errorMsg = response.message;
                  }
        );

        /* III. Load data vechile for displaying to grid*/
        $scope.search();
    }

    /*Populate data to html table*/
    $scope.search = function(){
        
        var url = 'vechile/plate/'+$scope.searchCriteria;

        if( $scope.searchCriteria == "" ){
            url = 'vechile/';
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
        server.post('vechile',$scope.data).then(
            /*success*/
            function(response){
                delete $scope.data;
                $scope.errorMsg = "Data Saved.";
                $scope.search();
            },
            /*failed*/
            function(response){
                $scope.errorMsg = response.message;
            }
        )
        $scope.hideAlert = false;
    };

    /*Delete data from database*/
    $scope.delete = function(data){

        $scope.hideAlert = false;
        server.delete('vechile/'+data.id).then(
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
        )
        
    };

   /*Show data from database to html form*/
   $scope.getData = function(data){

        server.get('vechile/'+data.id).then(
            /*success*/
            function(response){
                $scope.data = response;
                $scope.hideAlert = true;
            },
            /*failed*/
            function(response){
                console.log(response);
            }
        );
    }

   /*Clean Form*/
   $scope.cancel = function(){
        delete $scope.data;
        $scope.hideAlert = true;
   }

   init();

});