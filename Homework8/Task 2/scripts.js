
function calculate () {
	var num = document.getElementById('num').value;

	if( num%3 === 0){	
		 document.getElementById("text").innerHTML = "Числото се дели на 3";
	}
	else{
		 document.getElementById("text").innerHTML = "Числото не се дели на 3";
	}
}
