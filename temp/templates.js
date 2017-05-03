angular.module('myapp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partial/vechile_merk/vechile_merk.html',
    "<div ng-controller=VechileMerkCtrl><div class=row ng-hide=hideAlert><div class=col-md-4><div uib-alert type=danger>{{errorMsg}}</div></div></div><div class=row><div class=col-md-4><div class=\"box box-success\"><div class=\"box-header with-border\"><h3 class=box-title>Input New Vechile Merk</h3></div><form class=form-horizontal><div class=box-body><div class=form-group><label for=name class=\"col-sm-2 control-label\">Merk</label><div class=col-sm-10><input type=text class=form-control id=name placeholder=Merk ng-model=merk.name focus-me=true></div></div><div class=form-group><label for=capacity class=\"col-sm-2 control-label\">Capacity</label><div class=col-sm-10><input type=text class=form-control id=capacity placeholder=\"Capacity (Numberic)\" ng-model=merk.capacity></div></div></div><div class=box-footer><button type=submit class=\"btn btn-success\" ng-click=save()>Save</button> <button type=submit class=\"btn btn-default\">Cancel</button></div></form></div></div><div class=col-md-8><div class=\"box box-success\"><div class=box-header><h3 class=box-title>Responsive Hover Table</h3><div class=box-tools><div class=\"input-group input-group-sm\" style=\"width: 150px\"><input type=text name=table_search class=\"form-control pull-right\" placeholder=Search><div class=input-group-btn><button type=submit class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button></div></div></div></div><div class=\"box-body table-responsive no-padding\"><table class=\"table table-hover\"><tr><th>ID</th><th>Merk</th><th>Capacity</th></tr><tr ng-repeat=\"m in listData.content\"><td>{{m.id}}</td><td>{{m.name}}</td><td>{{m.capacity}}</td></tr></table></div></div></div></div></div>"
  );


  $templateCache.put('partial/vechile_type/vechile_type.html',
    "<div ng-controller=VechileTypeCtrl><div class=row ng-hide=hideAlert><div class=col-md-7><div uib-alert type=danger>{{errorMsg}}</div></div></div><div class=row><div class=col-md-7><div class=\"box box-success\"><div class=\"box-header with-border\"><h3 class=box-title>Input New Vechile Type</h3></div><form class=form-horizontal><div class=box-body><div class=form-group><label for=name class=\"col-sm-2 control-label\">Vechile Type</label><div class=col-sm-10><input type=text class=form-control id=name placeholder=\"Vechile Type\" ng-model=vechileType.name></div></div></div><div class=box-footer><button type=submit class=\"btn btn-success\" ng-click=save()>Save</button> <button type=submit class=\"btn btn-default\">Cancel</button></div></form></div></div></div></div>"
  );


  $templateCache.put('partial/view1/view1.html',
    "<style>.boxz{\n" +
    "        border-style: dashed;\n" +
    "        border-color: red;\n" +
    "    }</style><div class=col-md-12 ng-controller=View1Ctrl><div class=row><form class=form-horizontal><label for=deviceInput class=\"col-md-6 control-label text-nowrap boxz\">Device Name</label><div class=\"col-sm-6 boxz\"><input type=text class=form-control></div></form></div></div>"
  );

}]);
