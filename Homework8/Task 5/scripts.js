function calculate() {
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var h = document.getElementById('h').value;
	var result = ((a+b)*(h)/2);
	var resultInput = document.getElementById('result');
	resultInput.value = result;
}