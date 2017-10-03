"use strict";

angular.module('myApp.amenitiesModule',[])
    .controller("AmenitiesController",function ($scope,$rootScope,$uibModal) {
        $scope.headline = "Amenities";
        $scope.amenities =[
            {id:1,name: "computers", price: 22000, paid: true},
            {id:2,name: "tables", price: 22000, paid: true},
            {id:3,name: "chairs", price: 22000, paid: true},
            {id:4,name: "air conditioners", price: 22000, paid: false}
        ]

          $scope.AddAmenities = function (size) {
          $rootScope.modalInstance = $uibModal.open({
                templateUrl: 'add-amenity-modal.html',
                controller: 'addAmenityModalController',
                size: size
                })
            }
    })
    .controller("addAmenityModalController",function ($scope,$rootScope) {
        $scope.amenity = {
            name: null,
            price: null,
            paid: false
        }
        $scope.addAmenity = function () {
            console.log($scope.amenity)
        };

        $scope.cancel = function () {
            $rootScope.modalInstance.dismiss('cancel');
        };
        $scope.isInputValid = function () {
            return ($scope.amenity.name && $scope.amenity.price || '') !== '';
        };
    })
