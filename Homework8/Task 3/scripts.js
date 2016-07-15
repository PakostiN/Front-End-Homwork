
function show(){
	var num = document.getElementById('num').value;
	if(num%4==0 && num%7==0){
		document.getElementById('text').innerHTML = "Въведеното от вас число СЕ дели на 4 и 7!";
	}
	else{
		document.getElementById('text').innerHTML = "Въведеното от вас число НЕ СЕ дели на 4 и 7!";
	}
}