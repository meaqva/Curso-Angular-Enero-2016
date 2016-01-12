'use strict';

var app = angular.module('app', []);

function ServicioAlertas() {
    this.mostrarAdvertencia = function(mensaje) {
        swal("No vas a pasar de Storm Trooper", mensaje, "error");
    };
    
    this.mostrarOk = function(mensaje) {
        swal("Quien va a ser un buen Lord Sith? Tuuuuu!", mensaje, "success");
    };
}

app.service("ServicioAlertas", ServicioAlertas);

// Como todo servicio, se usan en controladores
app.controller("ControllerQueUsaServices", ['$scope', 'ServicioAlertas',
    function ($scope, ServicioAlertas) {
        $scope.mensaje = "";
        $scope.alerta = function() {
            ServicioAlertas.mostrarAdvertencia($scope.mensaje);
        };
        
        $scope.ok = function() {
            ServicioAlertas.mostrarOk($scope.mensaje);
        };
    }]);
