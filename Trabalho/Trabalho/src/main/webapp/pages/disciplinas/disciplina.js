module = angular.module("Trabalho", []);

module.controller("ManterDisciplina", ["$scope","$http", ManterDisciplina]);


function ManterDisciplina($scope,$http) {
    
    $scope.iniciar = funcaoIniciar;
    $scope.salvar = funcaoSalvar;
    $scope.excluir = funcaoExcluir;
    $scope.editar = funcaoEditar;
    
    $scope.disciplinas = [];
    $scope.disciplina = {};
    $scope.isNovo = true;
    
    function funcaoEditar(disciplina) {
        $scope.disciplina = angular.copy(disciplina);
        $scope.isNovo = false;
    }

    
    function funcaoExcluir() {
    }
    
    function funcaoSalvar() {
        
    }
    
    function funcaoCarregar() {
        $http.get("/disciplinas").success(onSuccess).error(onError);
        
        function onSuccess(data) {
            $scope.disciplinas = data;       
            console.log(data);
        }
        function onError(data) {
            alert("Deu erro: " + data);
        }
    }
    
    function funcaoIniciar() {
        funcaoCarregar();
        console.log(">>> Disciplinas carregados....");
    }
        
}


