'use strict';

var app = angular.module('app', []);

app.controller('AmenazaFantasma', ['$scope', function ($scope) {
    $scope.nombre = 'Java el Hutt';
    $scope.peli = 'La amenaza fantasma';
    $scope.estado = 'Amo de Tatooine';
    $scope.foto = 'http://4.bp.blogspot.com/_kVBIKsx0ZqQ/StXasCIs94I/AAAAAAAAAso/e1enl_i31g0/s400/2564925.JabbaTheHutt.jpg';
}]);

app.controller('AtaqueClones', ['$scope', function ($scope) {
    $scope.peli = 'El ataque de los clones';
    $scope.estado = 'Sigue disfrutando de los placeres de la riqueza';
}]);

app.controller('VenganzaSith', ['$scope', function ($scope) {
    $scope.peli = 'La venganza de los Sith';
    $scope.estado = 'Mira desde lejos el pifostio que se ha montado';
}]);

app.controller('NuevaExperanza', ['$scope', function ($scope) {
    $scope.peli = 'Una nueva esperanza';
    $scope.estado = 'Amo de Tatooine, pero Han Solo le debe bastante pasta';
    $scope.foto = 'http://www.mwctoys.com/images/SWULTRA02_JABBA_headshot.jpg';
}]);

app.controller('ImperioContraataca', ['$scope', function ($scope) {
    $scope.peli = 'El imperio contraataca';
    $scope.estado = 'Feliz de haberse vengado de Han Solo y tenerlo en carbonita en su bonita tienda';
    $scope.foto = 'http://1.media.dorkly.cvcdn.com/74/14/00c00975182975435df2086d398191e5-jabba-the-hutt.jpg';
}]);

app.controller('RetornoJedi', ['$scope', function ($scope) {
    $scope.peli = 'El retorno del Jedi';
    $scope.estado = 'Muerto';
    $scope.foto = 'http://1.bp.blogspot.com/_EXuVwemDZHg/SCWX_btcdBI/AAAAAAAAADE/wg6iqUe8JAg/s400/thebigguy.jpg';
}]);

app.controller('DespertarFuerza', ['$scope', function ($scope) {
    $scope.peli = 'El despertar de la fuerza';
    $scope.estado = 'Sigue muerto';
}]);
