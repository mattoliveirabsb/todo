// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
app = angular.module('todo', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// ROTAS        
//==================================================================================================================

app.config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/tarefas")

        $stateProvider.state('tarefas', {
                url: "/tarefas",
                views: {
                        tarefas: {
                                templateUrl: "tarefas.html",
                                controller: "taskCtrl"
                        }
                }
        })


        $stateProvider.state('completas',{
                url: "/completas",
                views: {
                        completas: {
                                templateUrl: "completas.html",
                                controller: "taskCtrl"
                        }
                }
        })
})


// CONTROLLERS        
//==================================================================================================================

.controller('taskCtrl', function($log, $scope, $window, $state, $document) {
        $log.debug("controller home foi iniciado")

        var getData = function(){
          var json = [];
          $.each($window.localStorage, function(i, v){
            json.push(angular.fromJson(v));
          });
          return json;
        }

       $scope.tarefas = getData();

       $scope.addTask = function(tarefa){
            json = {
              tarefa: tarefa,
              concluida: false
            }
            $window.localStorage.setItem(tarefa, JSON.stringify(json));
            $state.go($state.current, {}, {reload: true});
            
        } 

        $scope.checkTask = function(tarefa){
            var json = {
              tarefa: tarefa,
              concluida: true
            }
            $window.localStorage.setItem(tarefa, JSON.stringify(json));
            $state.go($state.current, {}, {reload: true});
            
        } 

        $scope.removeTask = function(tarefa){
            var json = {
              tarefa: tarefa,
              concluida: true
            }
            $window.localStorage.removeItem(tarefa);
            $state.go($state.current, {}, {reload: true});
            
        } 
        
        $log.debug('se mostrar era pra ta adicionando')
    

})


