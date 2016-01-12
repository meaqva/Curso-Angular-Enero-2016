/**
 * The "use strict" directive is new in JavaScript 1.8.5 (ECMAScript version 5).
 * It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
 * purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * with strict mode, you can not, for example, use undeclared variables.
 * 
 * More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode 
 *            http://www.w3schools.com/js/js_strict.asp
 * 
 * La directiva use strict es una directiva que no supone una instrucción de código, sino que indica el modo en que el 
 * navegador debe ejecutar el código JavaScript. Podríamos hablar de dos modos de ejecución JavaScript: el <<normal mode>>, 
 * que es el que hemos usado hasta ahora, y el <<strict mode>>.
 * 
 * Declarar que se use strict mode supone algunos cambios en cuanto al código que admite o no admite el navegador. 
 * Por ejemplo en strict mode es obligatoria la declaración de variables, mientras que en el modo normal no es necesario declarar una variable para usarla.
 * 
 * Además de no permitir el uso de variables declaradas, hay otras prácticas de programación que son admitidas por JavaScript 
 * clásico pero que no son admitidas en strict mode. Citaremos algunas:
 * 
 *      Uso de variables no declaradas
 *          nombre = 'juan';
 *      
 *      Borrar una variable u objeto usando delete
 *          delete nombre;
 *      
 *      Definir una propiedad dos veces
 *          var x = {persona:'juan', persona:'juan'};
 *          
 *      Nombres de parámetros duplicados
 *          function saludar(persona, persona) {};
 *          
 *      Usar eval como nombre de variable
 *          eval = 'aprobado';
 *          
 *      En una función si no se conoce this es el objeto global window
 *      
 *      En una función si no se conoce this es undefined (en modo 'no-estricto' sería global window)
 *      
 *      Hay más restricciones que impone el strict mode, relacionadas con evitar el uso de sintaxis no adecuada, instrucciones poco adecuadas, 
 *      prácticas inseguras y mejora de la seguridad para el usuario.
 */
'use strict';

angular.module('app.service', []);

angular.module('app.directive', []);

angular.module('app.filter', []);

angular.module('app', ['app.service', 'app.directive', 'app.filter'])
    .controller('MyController', function ($scope) {
        $scope.telaMarinera = 'Tela marinera';
    });
