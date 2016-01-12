'use strict';

var app = angular.module('app', []);

app.controller('MyController', ['$scope', '$q', '$timeout', function ($scope, $q, $timeout) {
        // EXCELSIOR TIP: Si no la pongo en $scope sería equivalente a declarar un método como PRIVATE
        function recalculoFlujosMarinosAsync () {
            $scope.mensaje = 'Estamos trabajando en ello...';
            
            // Obtengo el productor
            var defered = $q.defer();
            
            // 'Prometo' al consumidor que le daré una respuesta
            var promise = defered.promise;

            // Hago lo que tengo que hacer... Se supone que estamos haciendo un cálculo brutal acerca de
            // los flujos de las corrientes marinas, pero en realidad solo estoy esperando 3 segundos...
            $timeout(function () {
                try {
                    var resultado = 'Finalizado sin errores';
                    
                    // Aquí estoy indicando que he podido obtener el resultado
                    // Implícitamente también estoy CUMPLIENDO mi promesa
                    defered.resolve(resultado);
                } catch (e) {
                    // Prometer hasta meter, y después de haber metido, olvidar lo prometido
                    // (Traducción: Ha habido algún problema y no puedo cumplir mi promesa)
                    defered.reject(e);
                }
            }, 3000);
            
            return promise;
        };

        $scope.recalcular = function() {
            var promise = recalculoFlujosMarinosAsync();
 
            promise.then(function (resultado) {
                $scope.mensaje = "El resultado de la promesa es: " + resultado;
            }, function (error) {
                $scope.mensaje = "Se ha producido un error al obtener el dato:" + error;
            });
        };
        
    }]);
