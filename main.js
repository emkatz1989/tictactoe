var appTicTac=angular.module('TicTac',[]);

appTicTac.controller('myController', function($scope){
	console.log("here");

	$scope.cellList=[
	{status: "c0"},
	{status: "c1"},
	{status: "c2"},
	{status: "c3"},
	{status: "c4"},		
	{status: "c5"},
	{status: "c6"},
	{status: "c7"},
	{status: "c8"}
	];

	$scope.movecounter = 0 ;

//   // $scope.testJS = function() {
//   //   console.log('Correctly accessing JS function.') ;
//   // } ;
  
  $scope.playerPicks = function(thisCell) {
    $scope.movecounter = $scope.movecounter + 1 ;
    console.log("Cell was: " + thisCell.status) ;
    if (($scope.movecounter % 2) == 1) {
      thisCell.status = "X" ;  
    } else {
      thisCell.status = "O" ;
    } ;
  };
});
   
//   //   console.log("Cell is now: " + thisCell.status) ;
//   // }; 

// };

// }
	// $scope.checkWinner=function(){
	// 	thisCell.true=[[c0,c4,c8],[] ]
	// }





// 		$scope.movecounter=0;
		
// 		$scope.playerSelect=function(thisCell){
// 		$scope.movecounter = $scope.movecounter + 1;
// 		console.log("Cell was: " + thisCell.status);
// 		if(($scope.movecounter % 2)==1){
// 			thisCell.status="X" ;
// 			}else{
// 				thisCell.status="O";
// 			};

// 			}
// });
