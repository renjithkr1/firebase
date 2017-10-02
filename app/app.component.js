(function () {
    var config = {
        apiKey: "AIzaSyCxqC3YiexaNaq9Bx2PoNLFQgpSSId5AIs",
        authDomain: "trackme-95b14.firebaseapp.com",
        databaseURL: "https://trackme-95b14.firebaseio.com",
        projectId: "trackme-95b14",
        storageBucket: "trackme-95b14.appspot.com",
        messagingSenderId: "238200982954"
    };
    firebase.initializeApp(config);
    appController.$inject = ['$firebaseArray'];
    function appController($firebaseArray) {

        var ctrl = this;
        const rootRef = firebase.database().ref().child('todos');
        ctrl.object = $firebaseArray(rootRef);
        console.log(ctrl.object);
        ctrl.$onInit = function () {
            ctrl.onAddTodo = onAddTodo;
        }
        function onAddTodo(title) {
            ctrl.object.$add({
                title: title,
                completed: false
            }).then(function (data) {
                console.log(data);
            });
        }

        ctrl.object.$watch(function (a) {
            console.log(a);
        })
    }
    var appComponent = {
        controller: appController,
        templateUrl: 'app/app.component.html'
    }
    angular.module('app').component('appComponent', appComponent);
})();