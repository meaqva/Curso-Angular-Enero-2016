'use strict';

var app = angular.module('app', []);

app.factory("WeatherService", ['$http', function ($http) {
    return {
        currentWeatherAtCityAsync: function (city) {
            var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=%%__CITY__%%&appid=2de143494c0b295cca9337e1e96b00e0";

            requestUrl = requestUrl.replace("%%__CITY__%%", city);

            var promise = $http({
                method: 'GET',
                url: requestUrl
            });

            return promise;
        }
    };
}]);

// Valores escalares
app.constant("ENCRYPTION_SECRET", "57ac89dc-b5d6-48b9-ac47-21a3a6bd5dea");
app.constant("IVA", 21);

// Librerías de funciones
app.constant("staticFunctions", {
    importeMasIVA: function (importe, iva) {
        return (1 + iva) * importe;
    }
});

// Funciones solas
app.constant("calcularArea", function (radio) {
    return 3.141516 * radio * radio;
});

// Como todo servicio, se usan en controladores
app.controller("ControllerQueUsaContants", ['$scope', 'ENCRYPTION_SECRET', 'IVA', 'staticFunctions', 'calcularArea',
    function ($scope, ENCRYPTION_SECRET, IVA, staticFunctions, calcularArea) {
        $scope.secreto = ENCRYPTION_SECRET;
        $scope.iva = IVA;

        $scope.importe = 0;
        $scope.importeConIVA = staticFunctions.importeMasIVA($scope.importe, $scope.iva);

        $scope.radio = 0;
        $scope.area = calcularArea();
    }]);

app.controller('MyController', ['$scope', 'WeatherService', function ($scope, weatherService) {
        $scope.city = "";
        $scope.weather = "";

        $scope.whatWeatherIs = function () {
            var promise = weatherService.currentWeatherAtCityAsync($scope.city);

            promise.then(function (resultado) {
                $scope.weather = resultado.data.wind.speed;
            }, function (error) {
                $scope.weather = "Se ha producido un error al obtener el dato:" + error;
            });
        };

    }]);
