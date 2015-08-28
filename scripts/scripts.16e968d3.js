"use strict";angular.module("angularAppApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/recipe/:recipeID",{templateUrl:"views/recipe.html",controller:"RecipeCtrl",controllerAs:"recipe"}).otherwise({redirectTo:"/"})}]),angular.module("angularAppApp").controller("MainCtrl",["$scope","recipesearch","$localStorage",function(a,b,c){a.recipesFound=b.find(),a.storage=c,a.savedRecipes=localStorage.savedRecipes,a.findRecipes=function(){a.recipesFound=b.find({query:a.query})},a.saveRecipe=function(a){c.savedRecipes?c.savedRecipes.indexOf(a)>=0?console.log(" Recipe Already Saved"):c.savedRecipes.push(a):c.savedRecipes=[a]},a["delete"]=function(a){var b=c.savedRecipes.indexOf(a);c.savedRecipes.pop(b),0===c.savedRecipes.length&&delete c.savedRecipes}}]),angular.module("angularAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularAppApp").factory("current",["$resource",function(a){return a("http://api.yummly.com/v1/api/recipes?_app_id=3ca00079&_app_key=51e01589489c5872d2b13c715aba12d8&q=plantain&requirePictures=true",{},{query:{method:"GET",isArray:!1,params:{q:"plantain"},headers:{"X-Yummly-App-ID":"3ca00079","X-Yummly-App-Key":"51e01589489c5872d2b13c715aba12d8"}}})}]),angular.module("angularAppApp").factory("recipesearch",["$resource",function(a){return a("http://api.yummly.com/v1/api/recipes?_app_id=3ca00079&_app_key=51e01589489c5872d2b13c715aba12d8&q=:query&requirePictures=true",{},{find:{method:"GET",isArray:!1,params:{query:"plantain"},headers:{"X-Yummly-App-ID":"3ca00079","X-Yummly-App-Key":"51e01589489c5872d2b13c715aba12d8"}}})}]),angular.module("angularAppApp").controller("RecipeCtrl",["$scope","$routeParams","$localStorage",function(a,b,c){a.recipeID=b.recipeID;for(var d=0;d<c.savedRecipes.length;d++)c.savedRecipes[d].id===a.recipeID&&(a.currentRecipe=c.savedRecipes[d])}]),angular.module("angularAppApp").factory("recipe",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("angularAppApp").run(["$templateCache",function(a){a.put("views/about.html",'<p>This is the about view.</p> <div ng app ng-if="storage.savedRecipes"> <h2>My recipe box</h2> <ul class="saved-recipes-list"> <li ng-repeat="recipe in storage.savedRecipes"> <a ng-href="/#/current/{{recipe.id}}" class="btn btn-lg btn-primary">{{recipe.recipeName}}</a> </li> </ul> </div> <div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> plus <input type="number" min="0" ng-model="secondnum"> equals <b>{{firstnum + secondnum}}</b> </div>'),a.put("views/main.html",'<div ng-app ng-controller="MainCtrl"> <div class="hero container-fluid"> <p>A recipe finder inspired by the plantian sitting on my counter.</p> <p>Enter an ingredient below and find links to <strong>amazing</strong> recipes!!</p> <label> Enter an ingredient here: </label><input ng-model="query" placeholder="example: Plaintain" autofocus> <div class="search"> <div><button class="btn btn-md btn-primary" ng-click="findRecipes()">Search Recipes!!<span class="glyphicon glyphicon-cutlery"></span></button> </div> </div> </div> <div ng-if="recipesFound"> <!-- This code will displacy total recipes found matching keyword. I chose not to include.\n   <p class="lead">\n  {{recipesFound.totalMatchCount}} recipes found!\n</p> --> <!-- Found Recipes. Yummly API limits me to display 10, I chose to limit 9 for styling reasons  --> <div class="container"> <h2>Found Recipes:</h2> <ul class="recipe-list"> <li ng-repeat="recipe in recipesFound.matches | limitTo: 9" style="background-image: url({{recipe.smallImageUrls[0]}})"> <h2> <a ng-href="http://www.yummly.com/recipe/{{recipe.id}}" target="_blank">{{recipe.recipeName}}</a></h2> <p class="save-button-container"> <button class="btn btn-xs btn-success" ng-click="saveRecipe(recipe)">Save This Recipe!<span class="glyphicon glyphicon-apple"></span></button></p> </li> </ul> </div> <!-- Save recipes and delete saved recipes  --> <div ng-if="storage.savedRecipes"> <h2>Your recipe box</h2> <ul class="saved-recipes-list"> <li ng-repeat="recipe in storage.savedRecipes"> <a ng-href="/#/recipe/{{recipe.id}}" class="btn btn-small btn-primary">{{recipe.recipeName}}</a> <button ng-click="delete(recipe)">Remove this recipe<i class="glyphicon glyphicon-erase"></i></button> </li> </ul> </div> </div> </div>'),a.put("views/recipe.html",'<div ng-app ng-controller="RecipeController"> <div class="row"> <div class="col-md-6 col-md-offset-3" id="final-selection"> <p class="lead">This is the recipe view.</p> <h1>My recipes {{currentRecipe.recipeName}}</h1> {{currentRecipe}} <button class="btn btn-default" type="submit" ng-click="saveUserAnswer(1)">{{currentRecipe.recipeName }}</button> <button class="btn btn-default" type="submit" ng-click="saveUserAnswer(2)">{{ currentRecipe.recipeName}}</button><br> <a href="#/">Search for another recipe!<a> </a></div> </div></div>')}]);