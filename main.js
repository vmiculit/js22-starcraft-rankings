
angular.module("js22",["angularUtils.directives.dirPagination"])

	.controller("js22Troller",["$scope", "starcraftFactory", function($scope, starcraftFactory) {

		$scope.scData = starcraftFactory.scData.data
		$scope.columns = starcraftFactory.scData.cols

		$scope.sort = function(idx) {
			$scope.sortId = idx.toString();
			$scope.reverse = !$scope.reverse
		}

		$scope.totalPlayers = function(){
			return $scope.scData.length
		}
		$scope.gamesPlayed = function(){
			var wins = $scope.scData.reduce(function(sum, item){
				return sum + item[4]
			}, 0)
			var losses = $scope.scData.reduce(function(sum, item){
				return sum + item[5]
			}, 0)			
			return wins + losses
		}

		$scope.racePopularity = function(){
			var raceCounts = [{name: "somename", count : 2}]
			console.log(raceCounts[0]["name"] = "new name")

			// for (var i = 0; i < $scope.scData.length; i++) {

			// 	for (var i2 = 0; i2 < raceCounts.length; i2++) {

			// 		if (raceCounts[i2]["name"] === $scope.scData[i][3]) {
			// 			console.log("It's happening")
			// 			console.log(raceCounts[i2]["count"] += 1)
			// 		} else {
			// 			raceCounts.push({name : $scope.scData[i][3], count : 1})
			// 		}

			// 	}

			// }

			return 131
		}

	}])

			

