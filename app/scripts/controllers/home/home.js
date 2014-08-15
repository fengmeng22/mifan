// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("homeCtrl", [
  "$scope", "$routeParams", function($scope, $routeParams) {
    var legalFeedTypes, setCaretLeft;
    legalFeedTypes = ["news", "answer", "reply", "love"];
    setCaretLeft = function(type) {
      var index;
      index = legalFeedTypes.indexOf(type);
      return $scope.caretLeft = "" + (index * 25) + "%";
    };
    $scope.legalFeedTypes = legalFeedTypes;
    $scope.caretLeft = "0";
    if (0 > legalFeedTypes.indexOf($routeParams.type)) {
      $routeParams.type = "news";
    }
    $scope.feedType = $routeParams.type;
    $scope.$on("$viewContentLoaded", function() {
      return $scope.$emit("pageChange", "home");
    });
    $scope.remind = {
      newsNum: 0,
      answerNum: 2,
      replyNum: '...',
      loveNum: 0
    };
    $scope.$on("clearAnswerRemind", function() {
      return $scope.remind.answerNum = 0;
    });
    $scope.$on("clearReplyRemind", function() {
      return $scope.remind.replyNum = 0;
    });
    $scope.loadingMore = function() {
      return $scope.isLoading = true;
    };
    $scope.switchFeed = function(type) {
      type = type || "news";
      $scope.feedType = type;
      $scope.isLoading = false;
      return setCaretLeft(type);
    };
    return false;
  }
]);
