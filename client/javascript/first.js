//immediately invoked function expression
(function(global){


var dc = {};

var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='img/ajax-loader_2.gif'></div>";
    insertHtml(selector, html);
  };


var homeUrl = "snippets/home.html";
//window.location = homeUrl;
 //$("#main-content").load(homeUrl);
$(function(){
    
    showLoading("#main-content");

    $ajaxUtils.sendGetRequest(
        homeUrl,
        function(home_html){
            insertHtml("#main-content",home_html);
        },
        false    
)});



//console.log("Entered!!!");







global.$dc = dc;



})(window);