console.log("hererere1");
angular.module('meanGames',  ['ngRoute']).config(config);
console.log("hererere2");

function config($routeProvider)  {
    console.log("hererere");
    $routeProvider.when("/",  {
        templateUrL:  "game-list/games.html",
        controller:" GamesController",
        controllerAs:  "vm"
    });
}
console.log("hererere3");