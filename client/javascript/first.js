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
var dashBoardUrl = "snippets/dashBoard.html";
var checkerUrl = "snippets/checker.html";
var resultUrl = "snippets/result.html";
var helpUrl ="snippets/help.html";
//window.location = homeUrl;
 //$("#main-content").load(homeUrl);
$(function(){
    
    showLoading("#main-content"); //show loading gif

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
	    showLoading("#main-content");

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
    showLoading("#main-content");

	$("#main-content").load(statusUrl);
    
};


dc.getDashboard = function(){
	showLoading("#main-content");
	$("#main-content").load(dashBoardUrl);

};

dc.getChecker = function(){
	showLoading("#main-content");


	$("#main-content").load(checkerUrl);


	 $(function() {
                                              const z = prompt("Enter date of birth in the order year/month/day. For eg. 2055/11/15");
                                              const m = z.split('/').join('');
                                              const n = m.substring(0,4);
                                              const o = m.substring(4,6);
                                              const p = m.substring(6,8);
                                              const a = parseInt(n);
                                              const datetoday = 20751010;
                                              const age = (datetoday - parseInt(m))/10000;
                                              alert(".............");
                                              const x = document.getElementById("gg");
                                              const y = document.getElementById("ff");
                                              if(a < 2075 && a > 1960 && parseInt(o)<13 && parseInt(p)<32) { 
                                                
                                                if(age <18){
                                                      //console.log("Entered!!!");
                                                      y.style.color= "Red"; 
                                                      x.style.backgroundColor= "#FF5D52"; 

                                                      
                                                      y.innerHTML= "Age below 18"; 
                                                
                                                    }
                                                      
                                                  //y.innerHTML= "Finger print not found!!"; 
                                                    
                                                    else{
                                                   console.log(".............");
                                                  y.style.color= "green"; 
                                                  y.innerHTML= "All Ok!"; 
                                                  x.style.backgroundColor= "lightgreen"; 

                                                      }
                                                }
                                            else
                                            {
                                                alert("Wrong input!!! ");
                                            }   
                                                
                                                
    //{console.log("kick back!!!");}
});

};

dc.getResult = function(){
		showLoading("#main-content");
			$("#main-content").load(resultUrl);

};


dc.getHelp = function(){
			showLoading("#main-content");
			$("#main-content").load(helpUrl);

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