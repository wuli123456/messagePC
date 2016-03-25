'use strict';

/**
 * @ngdoc function
 * @name messagePcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messagePcApp
 */
angular.module('messagePcApp')
  .controller('TemplateCtrl', ['$scope','$rootScope',function ($scope,$rootScope) {
    $rootScope.loading = false;
    //基础的页码、排序等等选项
    $scope.media = {
        epage:1,
        pageCount:1,
        recordCount:1,
        pagesize:10,
        name:'',
        studentnumber:'',
        search:0,
        orderfield:'',
        ordertype:'',
        status:-1
    }
    //换页
    $scope.setPage = function(n){
        if($scope.media.epage + n >0 && $scope.media.epage + n <= $scope.media.pageCount){
            $scope.media.epage += n;
        } 
    };
    //调整每页显示量
    $scope.setPageSize = function(n){
        $scope.media.pagesize = n;
    }
    //排序
    $scope.setOrder = function(name){
        if($scope.media.orderfield == name)
        {
            $scope.media.ordertype = $scope.media.ordertype=="asc"?"desc":"asc";
        }else{
            $scope.media.orderfield = name;
            $scope.media.ordertype = "asc";
        }
    }
    //调整查询规则，计划中、已审批、已取消、已驳回
    $scope.setStatus = function(status){
        $scope.media.status = status;
    }
    //检索功能
    $scope.search = function(search){
        $scope.media.name = $scope.media.search?'':search;
        $scope.media.studentnumber = $scope.media.search?search:'';
    };
    
    $scope.form = {
        status:0,
        name:'',
        username:'',
        number:'',
        office:'',
        officeId:0,
        campusId:0,
        dataInit:function (item) {
            this.status = item?1:0;
            this.name = item?(item.name||''):'';
            this.username = '' + (item?(item.username||''):'');
            this.number = '' + (item?(item.number||''):'');
            this.officeId = '' + (item?(item.officeId||0):0);
            this.campusId = '' + (item?(item.campusId||0):0);
            this.phone = '' + (item?(item.phone||''):'');
        }
    }
    
    $scope.list = [
        {
            name:'模板1号',
            tid:123123123
        },
        {
            name:'模板2号',
            tid:123123123
        },
        {
            name:'模板3号',
            tid:123123123
        },
        {
            name:'模板4号',
            tid:123123123
        }
    ]
  }]);