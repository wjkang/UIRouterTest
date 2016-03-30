/**
 * Created by Administrator on 2016/3/30.
 */
var app=angular.module("photoGallery",['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when('', 'home');
    $urlRouterProvider.when('/', 'home');
    $urlRouterProvider.otherwise('home');
    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'partials/home.html'
    }).state('photos',{
        url:'/photos',
        templateUrl:'partials/photos.html'
    }).state('about',{
        url:'/about',
        templateUrl:'partials/about.html'
    })

});