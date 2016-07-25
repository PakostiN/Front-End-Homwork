function check(){
	var a = document.getElementById('num1').value;
	var b = document.getElementById('num2').value;
	var c = document.getElementById('num3').value;
	if(a > b && a > c){
		document.getElementById('text').innerHTML = "Първото въведено число е най-голямо!";
	}
	else if(b > a && b > c){
		document.getElementById('text').innerHTML = "Второто въведено число е най-голямо!"
	}
	else if(c > b && c > a){
		document.getElementById('text').innerHTML = "Третото въведено число е най-голямо!"
	}
	else{
		document.getElementById('text').innerHTML = "Няма въведени числа!"
	}
}