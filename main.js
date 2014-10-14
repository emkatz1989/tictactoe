var appTicTac=angular.module('appTicTac',[]);

 //app.directive('myDirective', function () {
//  return {
//     template: '<ul class="rating">' +
//                   '<li x-ng-repeat="star in stars" class="filled">' +
//                       '\u2605' +
//                   '</li>' +
//                 '</ul>',
//     restrict: 'A',
       // scope: {
       //  ratingValue: "="
       // },
//     link: function (scope, elem, attrs) {
//       console.log("Directive", scope, elem, attrs);
//       scope.stars = [];
//       for(var x = 0; x < parseInt(scope.ratingValue); x++)
//       {
//         scope.stars.push({});
//       }
//     }
//   }
// }); 

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
      cell.name = "X" ; 
      console.log(cell.name);
  	} 
    else {
      cell.name = "O" ;
      console.log(cell.name)

    };
  // 	if($scope.cellList[0..8].status=="false"){
  // 	console.log("It's a tie!");

  // 	else{
  // 		return;
  // }

  // }

  if(
//horizontal//
$scope.cellList[0].name==$scope.cellList[1].name && $scope.cellList[0].name==$scope.cellList[2].name ||
$scope.cellList[3].name==$scope.cellList[4].name && $scope.cellList[3].name==$scope.cellList[5].name ||
$scope.cellList[6].name==$scope.cellList[7].name && $scope.cellList[6].name==$scope.cellList[8].name||

//vertical//
$scope.cellList[0].name==$scope.cellList[3].name && $scope.cellList[0].name==$scope.cellList[6].name ||
$scope.cellList[1].name==$scope.cellList[4].name && $scope.cellList[1].name==$scope.cellList[7].name ||
$scope.cellList[2].name==$scope.cellList[5].name && $scope.cellList[2].name==$scope.cellList[8].name ||


//diagonal//
$scope.cellList[0].name==$scope.cellList[4].name && $scope.cellList[0].name==$scope.cellList[8].name || 
$scope.cellList[2].name==$scope.cellList[4].name && $scope.cellList[2].name==$scope.cellList[6].name){
  alert("'$scope.cellList.status + 'wins!'");
//document..reset();
}

else{
	return;
}

    };

  console.log("Cell was: " + cell.name);
  
  $scope.reload=function(){
  y=confirm("Play Again?");
  if(y=true){
    alert("Here we go!")
  location.reload(true);
}
} 
    	
}
});


   


