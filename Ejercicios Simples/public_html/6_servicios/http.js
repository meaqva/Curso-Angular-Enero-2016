'use strict';

var app = angular.module('app', []);

app.controller('MyController', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://www.w3schools.com/angular/customers.php'
    }).then(function (obj) {
        $scope.records = obj.data.records;
    });
});
