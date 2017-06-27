var app = angular.module('todo', []);

app.controller('TodoController', function($scope){
  $scope.tarefas = [];
  $scope.dados = {};

  $scope.inserirTarefa = function(){
    var tarefa = {
      'nome': $scope.dados.nome,
      'estado': false
    };

    $scope.tarefas.push(tarefa);
  }

  $scope.limparTarefa = function(){
    $scope.tarefas = [];
  }

  $scope.check = function(tarefa){
    tarefa.estado = true;
  }

});
