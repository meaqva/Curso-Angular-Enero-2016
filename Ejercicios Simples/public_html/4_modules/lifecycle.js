'use strict';

function mayusculasFilter(valor) {
    if (typeof (valor) === "string") {
        return valor.toUpperCase();
    } else {
        return valor;
    }
}

function Rectangulo() {
    console.log('Se inicializan los servicios');
    this.ancho = 0;
    this.alto = 0;

    this.setAncho = function (ancho) {
        this.ancho = ancho;
    };

    this.setAlto = function (alto) {
        this.alto = alto;
    };

    this.getArea = function () {
        return this.ancho * this.alto;
    };
}

angular.module('app', [])
    .service('rectangulo', Rectangulo)

    .filter('mayusculas', function () {
        console.log('Creacion de filtros');
        return mayusculasFilter;
    })

    .config(function () {
        console.log('Se ejecuta el bloque de configuracion');
    })

    .provider('myProvider', function () {
        console.log('Se crean los providers');

        this.$get = 'Hola';
    })

    .factory('myFactories', function () {
        console.log('Se crean las factorias');
        return 'hola';
    })

    .run(function () {
        console.log('Se ejecuta el bloque run');
    })

    .directive('iti', function () {
        console.log('Se ejecutan las directivas');
        return {
            template: 'hola caracola'
        };
    })
    .controller('LifecycleController', ["$scope", "myFactories", "rectangulo", function ($scope, myFactories, rectangulo) {
            console.log('Se ejecutan los controladores');
    }]);
