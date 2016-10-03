var app = angular.module("BookCatalogueApp", []);


window.onload = function(){ 
  document.getElementsByClassName("black-pad")[0].onclick = function(e) {

    	if(e.target == document.getElementsByClassName("black-pad")[0]) {
        	document.getElementsByClassName("outer")[0].style.display = "none";  
        	document.getElementById("name").value = "";
            document.getElementById("author").value = "";
            document.getElementById("price").value = "";     
    	} 

	}
	
};
