var appTicTac=angular.module('appTicTac',[]);

appTicTac.controller('myController', function($scope){
	console.log("here");

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


 $scope.moveCounter = 0;
  
 $scope.playerPicks = function(cell) {

 if(cell.status=="true"){

	cell.status="false";

    $scope.moveCounter=$scope.moveCounter + 1;

    if (($scope.moveCounter % 2) == 1) {
      cell.name = "X" ; } 
    else {
      cell.name = "O" ;

    };

  if(
//horizontal//
$scope.cellList[0].status===$scope.cellList[1].status && $scope.celllist[0].status==$scope.cellList[2].status ||
$scope.cellList[3].status===$scope.cellList[4].status && $scope.cellList[3].status===$scope.cellList[5].status ||
$scope.cellList[6].status===$scope.cellList[7].status && $scope.cellList[6].status===$scope.cellList[8].status||

//vertical//
$scope.cellList[0].status===$scope.cellList[3].status && $scope.cellList[0].status==$scope.cellList[6].status ||
$scope.cellList[1].status===$scope.cellList[4].status && $scope.cellList[1].status==$scope.cellList[7].status ||
$scope.cellList[2].status===$scope.cellList[5].status && $scope.cellList[2].status==$scope.cellList[8].status ||


//diagonal//
$scope.cellList[0].status===$scope.cellList[4].status && $scope.cellList[0].status==$scope.cellList[8].status || 
$scope.cellList[2].status===$scope.cellList[4].status && $scope.cellList[2].status==$scope.cellList[6].status){
  console.log("'$scope.cellList.status' + 'wins!'");

}

else{
	return;
}

    };

    console.log("Cell was: " + cell.name);
   
    	
}
});
   


