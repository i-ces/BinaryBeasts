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
var registerUrl = "snippets/registration.html";
var statusUrl = "snippets/statusCheck.html";


//window.location = homeUrl;
 //$("#main-content").load(homeUrl);
$(function(){
    
    //showLoading("#main-content"); //show loading gif

//     $ajaxUtils.sendGetRequest(
//         homeUrl,
//         function(home_html){
//             insertHtml("#main-content",home_html);
//         },
//         false   //no json response 
// )
	
	$("#main-content").load(homeUrl);

});



//console.log("Entered!!!");


dc.getRegister = function(){
	    //showLoading("#main-content");

	    // $ajaxUtils.sendGetRequest(
	    // 		registerurl , 
	    // 		function(register_page){
	    // 			insertHtml("#main-content", register_page);
	    // 		},
	    // 		false  //no json response
	    // 	);
	    	$("#main-content").load(registerUrl);



};

dc.getStatus = function(){
    //showLoading("#main-content");

	$("#main-content").load(statusUrl);
    
};


dc.validateForm = function(){
	//showLoading("#main-content");
	// $("#main-content").load(registerurl);
			//alert("entered");

	 		  var x = document.getElementById("Citizenship").value;
              var y = document.getElementById("location").value;
              var z = document.getElementById("chheckbox").checked;              
              var a = x.length;
              var b = y.length;
              if (a == 14 && b == 3 && z ){
                alert("you are registered");
              	}
              else{
                alert("wrong input");
              	}



};

dc.checkStatus = function(){
	var citizenNoo = $('#Citizenship').val();

   

    if(citizenNoo != '' && citizenNoo.length>=12 ){
        var data = {
            citizenNo: citizenNoo
            //password : pass2
        };

        alert(citizenNoo);
       }
};






global.$dc = dc;



})(window);