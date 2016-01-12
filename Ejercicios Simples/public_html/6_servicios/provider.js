'use strict';

console.log("Creando modulo");
var app = angular.module('app', []);

function HashProvider() {
    // Variable privada
    var _algoritmo = "";

    // Método público
    this.setAlgoritmo = function (algoritmo) {
        _algoritmo = algoritmo;
    };

    // Este es el factory-provider. Es exactamente igual que un factory normal, solo que en lugar de obtener los datos
    // de otro servicio inyectado los obtiene de las propiedades definidas fuera (en este caso, setAlgoritmo)
    this.$get = function () {
        try {
            var hashFunction = "";

            switch (_algoritmo) {
                case "MD5":
                    hashFunction = CryptoJS.MD5;
                    break;
                case "SHA-1":
                    hashFunction = CryptoJS.SHA1;
                    break;
                case "SHA-2-256":
                    hashFunction = CryptoJS.SHA - 2 - 256;
                    break;
                default:
                    throw Error("Algoritmo inválido");
            }

            var hash = function (mensaje) {
                var resultado = hashFunction(mensaje);

                var strResult = resultado.toString(CryptoJS.enc.Base64);

                return strResult;
            };

            return hash;
        } catch (err) {
            console.log("Error", err);
        }
    };
}

app.provider("hash", HashProvider);

// La configuración de los providers solo es posible en bloques CONFIG
// La inyección de un provider siempre es el NOMBRE que se le ha establecido MÁS
// la palabra Provider. En nuestro caso "hashProvider"
app.config(["hashProvider", function (hashProvider) {
        hashProvider.setAlgoritmo("MD5");
    }]);

app.controller("ControllerQueUsaProviders", ['$scope', 'hash',
    function ($scope, hash) {
        $scope.password = "s3cret";

        $scope.getHash = function (mensaje) {
            var result = hash(mensaje);
            return result;
        };
    }]);
