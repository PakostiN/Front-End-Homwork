function calculate(){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var resultInput = document.getElementById('result');
	var result = a*b;
	resultInput.value = result;
}