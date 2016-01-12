'use strict';

var app = angular.module('app', []);

app.controller("MyController", ['$scope', function($scope) {
        
    }
]);

app.directive('copyright', function() {
    return {
        restrict: 'M',
        compile: function(element) {
            element.text('Copyright 2015-2016 Instituto Tecnológico de Informática (ITI). Prohibida la reproducción total o parcial sin permiso del ITI');
        }
    };
});