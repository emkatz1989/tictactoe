var appTicTac=angular.module('appTicTac',["firebase"]);

appTicTac.controller('myController', function ($scope, $firebase){

$scope.remoteGameContainer= $firebase(new Firebase("https://ekatzttt.firebaseio.com/databasegamecontainer"));

 //gameboard with cell properties "name" for assigning player and "status" for changing box click status // 

	$scope.cellList=[
	{name: "c0", status: "true"},
	{name: "c1", status: "true"},
	{name: "c2", status: "true"},
	{name: "c3", status: "true"},
	{name: "c4", status: "true"},		
	{name: "c5", status: "true"},
	{name: "c6", status: "true"},
	{name: "c7", status: "true"},
	{name: "c8", status: "true"}
	];



//keeps track of player clicks//
 
$scope.moveCounter = 0;
// $scope.wins=[{name:"player1", wins:0},{name:"player2", wins:0};

//Special Sauce Here: anything on list with $scope in code replaced with $scope.gameContainer
$scope.gameContainer={
  cellListArray: $scope.cellList,
  moveCount: $scope.moveCounter
};

//Angular Stuff Here

$scope.remoteGameContainer.$bind($scope, "gameContainer");

$scope.$watch('gameContainer', function(){
  console.log('gameContainer changed!');
});

//function for choosing a valid cell and winning//
 $scope.playerPicks = function(cell) {

 if(cell.status=="true"){

  cell.status="false"; //cell becomes unclickable when turned false//

  $scope.gameContainer.moveCount++; //moveCounter counts only true cells turning false
    

  if (($scope.gameContainer.moveCount % 2) == 1) { //odd clicks determine Player 1//
      cell.name = "Dic 1" ; 
      console.log(cell.name);
  	}                            //even clicks determine Player 2//
    else {
      cell.name = "Dic 2" ;  
      console.log(cell.name)

    };


  if(
//horizontal win//
$scope.gameContainer.cellListArray["0"].name==$scope.gameContainer.cellListArray["1"].name && $scope.gameContainer.cellListArray["0"].name==$scope.gameContainer.cellListArray["2"].name ||
$scope.gameContainer.cellListArray["3"].name==$scope.gameContainer.cellListArray["4"].name && $scope.gameContainer.cellListArray["3"].name==$scope.gameContainer.cellListArray["5"].name ||
$scope.gameContainer.cellListArray["6"].name==$scope.gameContainer.cellListArray["7"].name && $scope.gameContainer.cellListArray["6"].name==$scope.gameContainer.cellListArray["8"].name||

//vertical win//
$scope.gameContainer.cellListArray["0"].name==$scope.gameContainer.cellListArray["3"].name && $scope.gameContainer.cellListArray["0"].name==$scope.gameContainer.cellListArray["6"].name ||
$scope.gameContainer.cellListArray["1"].name==$scope.gameContainer.cellListArray["4"].name && $scope.gameContainer.cellListArray["1"].name==$scope.gameContainer.cellListArray["7"].name ||
$scope.gameContainer.cellListArray["2"].name==$scope.gameContainer.cellListArray["5"].name && $scope.gameContainer.cellListArray["2"].name==$scope.gameContainer.cellListArray["8"].name ||


//diagonal win//
$scope.gameContainer.cellListArray["0"].name==$scope.gameContainer.cellListArray["4"].name && $scope.gameContainer.cellListArray["0"].name==$scope.gameContainer.cellListArray["8"].name || 
$scope.gameContainer.cellListArray["2"].name==$scope.gameContainer.cellListArray["4"].name && $scope.gameContainer.cellListArray["2"].name==$scope.gameContainer.cellListArray["6"].name){
  $scope.player1score=0; //player 1 scorekeeper//
  $scope.player2score=0; //player 2 scorekeeper//
  $scope.notification=cell.name + ' wins!';
  // moveCounter++;
  cell.name=="Player 1" ? $scope.player1score++ : ""; //score counter interates
  cell.name=="Player 2" ? $scope.player2score++ : "";
  if($scope.gameContainer.moveCount==9){ //it's a tie once moveCounter reaches 9
  alert("It's a tie!");
  };

}
else{
	return; //loops throught the function until it determines a winner//
}

    };

  console.log("Cell was: " + cell.name);
  
  //reset button reloads the game//
  $scope.reload=function(){
  X=confirm("Play Again?");
  if(X=true){
    alert("Here we go!")
  location.reload(true);
}
} 
    	
}
});


   


