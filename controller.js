"use strict"
function TodoController(){
    const vm = this;
    
    vm.updateIndex = () =>{

    }
    vm.toDo = [
    ];
    vm.addItem = (newItem) => {
    
        newItem.completed = false;
        
        vm.toDo.push(angular.copy(newItem));
        console.log(newItem);
    };
    vm.completeTask = (item) => {

        item.completed = true;
    };
    vm.removeItem = (index) => {
        console.log(index);
        vm.toDo.splice(index, 1);
        
    }

};
angular 
        .module("todoApp")
        .controller("TodoController", TodoController)