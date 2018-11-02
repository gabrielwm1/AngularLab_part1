"use strict"
function TodoController(){
    const vm = this;
    vm.toDo = [
        {task:"walk the dog", completed: true},
        {task: "Go to the store", completed: false},
        {task: "get gas", completed: true},
        {task: "Wash the car", completed: false}
    ];
    vm.addItem = (newItem) => {
        vm.toDo.push(angular.copy(newItem));
    }
}
angular 
        .module("todoApp")
        .controller("TodoController", TodoController)