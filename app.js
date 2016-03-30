/**
 * Created by Administrator on 2016/3/30.
 */
var app=angular.module("photoGallery",['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when('', 'home');
    $urlRouterProvider.when('/', 'home');
    $urlRouterProvider.otherwise('home');
    $stateProvider.state('content',{
        url:'/',
        views: {
            "":{templateUrl:'partials/content.html'},
            "header@content":{templateUrl:'partials/header.html'}
        }
    }).state('content.photos',{
        url:'photos',
        views: {
            "body@content":{templateUrl:'partials/photos.html'}
        }
    }).state('content.about',{
        url:'about',
        views: {
            "body@content":{templateUrl:'partials/about.html'}
        }
    }).state('content.home',{
        url:'home',
        views: {
            "body@content":{templateUrl:'partials/home.html'}
        }
    })

});

//这时候，页面是这样呈现出来的：
//
//→ 来到home这个路由
//
//    .state('content.home',{
//        url: 'home',
//        views:{
//            "body@content":{templateUrl: 'partials/home.html'}
//        }
//    })
//
//以上，告诉我们partials/home.html将会被加载到与"body@content"匹配的ui-view中。暂时对应的ui-view还没有出现，于是等待。
//
//→ 路由看到index.html上的<div ui-view></div>
//
//    .state('content',{
//        url: '/',
//        views:{
//            "":{templateUrl: 'partials/content.html'},
//            "header@content":{templateUrl: 'partials/header.html'},
//        }
//    })
//
//于是，就找到了content这个state下views下的 "":{templateUrl: 'partials/content.html'}这个键值对，把partials/content.html显示出来。
//
//→ 分别加载partials/content.html页面上的各个部分
//
//看到<div ui-view="header"></div>，就加载如下：
//
//"header@content":{templateUrl: 'partials/header.html'},
//
//看到<div ui-view="body"></div>，先加载 "body@content":{templateUrl: 'partials/home.html'}
//
//→ 点击header上的链接
//
//点击<a ui-sref="content.photos">Photos</a>，来到：
//
//    .state('content.photos',{
//        url: 'photos',
//        views:{
//            "body@content":{templateUrl: 'partials/photos.html'}
//        }
//    })
//
//把partials/photos.html显示到<div ui-view="body"></div>中去。
//
//点击<div ui-view="body"></div>，来到：
//
//    .state('content.about',{
//        url:'about',
//        views:{
//            "body@content":{templateUrl: 'partials/about.html'}
//        }
//    })
//
//把partials/about.html显示到<div ui-view="body"></div>中去。