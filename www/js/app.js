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

        $urlRouterProvider.otherwise("/home")

        $stateProvider.state('home', {
                url: "/home",
                views: {
                        home: {
                                templateUrl: "home.html",
                                controller: "homeCtrl"
                        }
                }
        })


        $stateProvider.state('completas',{
                url: "/completas",
                views: {
                        completas: {
                                templateUrl: "completas.html",
                                controller: "completasCtrl"
                        }
                }
        })
})


// CONTROLLERS        
//==================================================================================================================

.controller('homeCtrl', function($log, $scope){
        $log.debug("controller home foi iniciado")

        tasks = localStorage.getItem('tarefas');
        $scope.tarefas = [    { name: 'Ouvir Daft Punk' },    { name: 'Baixar Game Of Thrones' },    { name: 'Arrumar uma Namorada' },  ];

})

.controller('completasCtrl', function($log){
        $log.debug("controller completas foi iniciado")
});


